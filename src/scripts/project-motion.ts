// Enhance native disclosures without changing their no-JavaScript behavior.
export function enhanceProjectMotion() {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const disclosures = document.querySelectorAll<HTMLDetailsElement>('.project, .project-notes');
  const controllers = new Map<HTMLDetailsElement, { finish: () => void; expanded: () => boolean }>();

  for (const details of disclosures) {
    const summary = details.querySelector<HTMLElement>(':scope > summary');
    if (!summary) continue;
    const content = document.createElement('div');
    content.className = 'disclosure-content';
    while (summary.nextSibling) content.append(summary.nextSibling);
    details.append(content);
    let expanded = details.open;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const finish = () => {
      clearTimeout(timer);
      timer = undefined;
      details.open = expanded;
      content.classList.remove('is-transitioning');
      content.style.removeProperty('height');
      content.style.removeProperty('opacity');
      content.inert = false;
      summary.removeAttribute('aria-expanded');
    };
    controllers.set(details, {
      finish: () => { if (timer !== undefined) finish(); },
      expanded: () => timer === undefined ? details.open : expanded,
    });
    content.addEventListener('transitionend', event => {
      if (event.target === content && event.propertyName === (reducedMotion.matches ? 'opacity' : 'height')) finish();
    });
    details.addEventListener('toggle', () => {
      if (timer === undefined) expanded = details.open;
    });

    summary.addEventListener('click', event => {
      if ((event.target as Element).closest('a')) return;
      event.preventDefault();
      expanded = !(timer === undefined ? details.open : expanded);
      if (event.detail === 0) {
        finish();
        return;
      }

      clearTimeout(timer);
      const height = details.open ? content.getBoundingClientRect().height : 0;
      const opacity = details.open ? getComputedStyle(content).opacity : '0';
      content.classList.remove('is-transitioning');
      content.style.height = reducedMotion.matches ? 'auto' : `${height}px`;
      content.style.opacity = opacity;
      details.open = true;
      content.inert = !expanded;
      summary.setAttribute('aria-expanded', String(expanded));
      // Flush the measured start so rapid clicks retarget from the current frame.
      void content.offsetHeight;
      content.classList.add('is-transitioning');
      content.style.height = reducedMotion.matches ? 'auto' : `${expanded ? content.scrollHeight : 0}px`;
      content.style.opacity = expanded ? '1' : '0';
      timer = setTimeout(finish, 200);
    });
  }

  const finishAll = () => {
    for (const controller of controllers.values()) controller.finish();
  };
  reducedMotion.addEventListener('change', finishAll);
  window.addEventListener('resize', finishAll);
  return {
    isExpanded: (details: HTMLDetailsElement) => controllers.get(details)?.expanded() ?? details.open,
    open: (details: HTMLDetailsElement) => {
      controllers.get(details)?.finish();
      details.open = true;
    },
  };
}

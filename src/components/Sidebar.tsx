export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 pl-2 pr-3 py-5 bg-black rounded-r-4xl z-50">
      <div className="flex flex-col gap-5">
        <a
          href="https://www.linkedin.com/in/leonardo-p%C3%A9rez-palatto-05b86030b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-auto w-8 hover:scale-110 cursor-pointer hover:bg-blue-400 hover:transition-all rounded-lg duration-300"
            src="/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/leopalatto20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-auto w-8 hover:scale-110 cursor-pointer hover:bg-purple-400 hover:transition-all rounded-lg duration-300"
            src="/github.png"
            alt="linkedin"
          />
        </a>
      </div>
    </aside>
  );
}

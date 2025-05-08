interface Props {
  image: string;
  title: string;
  link?: string;
  text: string;
}
export default function Project({ image, title, link, text }: Props) {
  return (
    <a href={link}>
      <div className="flex flex-col cursor-pointer hover:scale-105 duration-300 w-full border-4 border-miel items-center justify-center rounded-2xl overflow-hidden">
        <img src={image} alt="image" className="w-full h-auto" />
        <div className="w-full p-4 text-left">
          <h1 className="text-3xl font-stretch-50% font-bold underline">
            {title}
          </h1>
          <h1 className="text-2xl font-bold hover:text-miel">
            Click para verlo
          </h1>
        </div>
        <div className="w-9/10 p-4 text-left">
          <h1 className="text-2xl">{text}</h1>
        </div>
      </div>
    </a>
  );
}

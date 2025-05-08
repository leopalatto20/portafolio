interface Props {
  image: string;
  title: string;
  link?: string;
  text: string;
}

export default function Project({ image, title, link, text }: Props) {
  return (
    <a href={link} className="w-full max-w-sm">
      {" "}
      <div className="flex flex-col cursor-pointer hover:scale-105 duration-300 w-full h-[500px] border-4 border-miel items-center justify-start rounded-2xl overflow-hidden">
        <img
          src={image}
          alt="image"
          className="w-full h-52 object-cover object-center"
        />
        <div className="w-full p-4 text-left">
          <h1 className="text-3xl font-bold underline">{title}</h1>
          <h1 className="text-2xl font-bold hover:text-miel">
            Click para verlo
          </h1>
        </div>
        <div className="w-full px-4 pb-4 text-left overflow-y-scroll h-40">
          <h1 className="text-2xl">{text}</h1>
        </div>
      </div>
    </a>
  );
}

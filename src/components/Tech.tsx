type Props = {
  image: string;
  text: string;
  textColor?: string; // puede ser "#ffaa00" o "red", etc.
};

export default function Tech({ image, text, textColor = "#000000" }: Props) {
  return (
    <div className="w-72 flex flex-row justify-center p-4 gap-4 items-center border-2 border-miel rounded-4xl bg-white/10">
      <img src={image} alt={text} className="w-20 h-20 object-contain" />
      <h1 className="text-xl font-bold pr-5" style={{ color: textColor }}>
        {text}
      </h1>
    </div>
  );
}

interface Props {
  text: string;
}
export default function Intcard({ text }: Props) {
  return (
    <div className="w-40 text-xl rounded-lg text-center border-2 border-black text-black bg-yellow-300">
      {text}
    </div>
  );
}

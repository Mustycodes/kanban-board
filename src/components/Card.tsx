type CardProps = {
  text: string;
};
export const Card = ({ text }: CardProps) => {
  return <div id="card-container" className="py-2 px-4 mb-2 cursor-pointer bg-[#f5f3f6] max-w-[300px] rounded shadow-md">{text}</div>;
};

type CardProps = {
  text: string;
};
export const Card = ({ text }: CardProps) => {
  return <div className="card-container">{text}</div>;
};

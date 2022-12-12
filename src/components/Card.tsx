import { FC } from "react";

type Props = {
  heading: string;
  value: string;
};

const Card: FC<Props> = ({ heading, value }) => {
  return (
    <div className="mb-6 last:mb-0 ">
      <h2 className="font-bold text-xs text-neutral-300 uppercase tracking-widest">
        {heading}
      </h2>
      <p className="font-bold text-lg text-neutral-400">{value}</p>
    </div>
  );
};

export default Card;

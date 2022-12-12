import { FC } from "react";

type Props = {
  heading: string;
  value?: string;
};

const Card: FC<Props> = ({ heading, value }) => {
  return (
    <div className="mb-6 last:mb-0 lg:mb-0 lg:border-r-2 lg:last:border-none lg:px-14 lg:py-4 border-neutral-200">
      <h2 className="font-bold text-xs text-neutral-300 uppercase tracking-widest">
        {heading}
      </h2>
      {value && <p className="font-bold text-lg text-neutral-400">{value}</p>}
    </div>
  );
};

export default Card;

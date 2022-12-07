import { FC } from "react";
import ArrowSVG from "../assets/icon-arrow.svg";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const Input: FC<Props> = ({ onChange, value }) => {
  return (
    <div className="flex max-w-2xl flex-1 ">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="w-full py-5 px-6 rounded-l-3xl flex-1 text-neutral-400 text-ellipsis placeholder:text-neutral-300 outline-none"
        placeholder="Search for any IP address"
      />
      <button
        type="submit"
        className="bg-neutral-500 px-6 rounded-r-3xl cursor-pointer transition duration-300 hover:bg-neutral-400"
        title="Search location"
      >
        <img src={ArrowSVG} alt="Search" />
      </button>
    </div>
  );
};

export default Input;

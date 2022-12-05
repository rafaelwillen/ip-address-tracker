import ArrowSVG from "../assets/icon-arrow.svg";

const Input = () => {
  return (
    <div className="flex">
      <input
        type="text"
        className="w-full py-5 px-6 rounded-l-3xl flex-1 text-neutral-400 text-ellipsis placeholder:text-neutral-300"
        placeholder="Search for any IP address"
      />
      <button
        type="submit"
        className="bg-neutral-500 px-6 rounded-r-3xl cursor-pointer"
        title="Search location"
      >
        <img src={ArrowSVG} alt="Search" />
      </button>
    </div>
  );
};

export default Input;

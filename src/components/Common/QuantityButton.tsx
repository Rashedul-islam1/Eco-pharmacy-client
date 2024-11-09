import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

const QuantityButton = ({
  quantity,
  handleIncrement,
  handleDecrement,
}: any) => {
  return (
    <div className="flex justify-center items-center rounded gap-3 text-base border border-teal-400 px-4">
      <HiOutlineMinus
        className="bg-primary/40 hover:bg-primary rounded-full p-2 text-3xl text-white cursor-pointer"
        onClick={handleDecrement}
      />
      <span className="mx-2 text-center text-gray-900 font-medium">
        {quantity}
      </span>
      <HiOutlinePlus
        className="bg-primary/40 hover:bg-primary rounded-full p-2 text-3xl text-white cursor-pointer"
        onClick={handleIncrement}
      />
    </div>
  );
};

export default QuantityButton;

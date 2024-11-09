import OrderCart from "@/components/Navbar/OrderCart";
import { RootState } from "@/redux/features/store";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Dropdown from "./MenuDropdown";

const ActionIcons = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="flex items-center gap-2 ">
      <button
        onClick={() => setOpen(true)}
        aria-label="Cart"
        className=" relative group size-[42px] rounded-full bg-primary/10 hidden md:flex justify-center items-center duration-300"
      >
        <FaCartShopping className="text-xl  text-primary duration-300" />
        <div>
          {cartItems?.length > 0 && (
            <div className="size-4 top-0 text-[10px] flex justify-center items-center absolute rounded-full bg-primary text-white">
              <p>{cartItems?.length}</p>
            </div>
          )}
        </div>
      </button>
      <OrderCart open={open} setOpen={setOpen} />
      <Dropdown />
    </div>
  );
};

export default ActionIcons;

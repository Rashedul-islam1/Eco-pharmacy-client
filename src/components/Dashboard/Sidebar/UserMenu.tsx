import { CgProfile } from "react-icons/cg";
import { FaRegListAlt } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="/user-profile" />
      <MenuItem icon={IoBagCheckOutline} label="Checkout" address="/checkout" />
      <MenuItem icon={MdOutlineShoppingCart} label="My Cart" address="/cart" />
      <MenuItem
        icon={FaRegListAlt}
        label="Order History"
        address="/order-history"
      />
    </>
  );
};

export default UserMenu;

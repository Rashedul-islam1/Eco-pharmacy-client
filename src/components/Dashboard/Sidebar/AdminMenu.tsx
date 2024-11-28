import { AiOutlineOrderedList } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUsersGear } from "react-icons/fa6";
import { MdAddCircle, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="/user-profile" />{" "}
      <MenuItem icon={MdAddCircle} label="Add Product" address="/addproduct" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Products"
        address="/manage-products"
      />
      <MenuItem
        icon={AiOutlineOrderedList}
        label="Manage Orders"
        address="/manage-orders"
      />
      {/* <MenuItem
        icon={MdCategory}
        label="Manage Categories"
        address="/manage-categories"
      /> */}
      <MenuItem
        icon={FaUsersGear}
        label="Manage Users"
        address="/manage-users"
      />
    </>
  );
};

export default AdminMenu;

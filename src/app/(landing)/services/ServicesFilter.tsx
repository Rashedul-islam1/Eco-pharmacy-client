import Image from "next/image";
import { FiArrowRight, FiSend } from "react-icons/fi";
const ServicesFilter = () => {
  return (
    <div>
      <div className="p-3 border ">
        <div
          className="p-2 bg-slate-100  hover:!bg-secondary transition-colors sm:cursor-pointer flex
    items-center justify-between group hover:text-slate-200"
        >
          <p>Business Management</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>

        <div
          className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex
    items-center justify-between group hover:text-slate-200 mt-2"
        >
          <p>Manage Services</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>

        <div
          className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex
    items-center justify-between group hover:text-slate-200 mt-2"
        >
          <p>Online Services</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>

        <div
          className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex
    items-center justify-between group hover:text-slate-200 mt-2"
        >
          <p>Online Buying</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>

        <div
          className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex
    items-center justify-between group hover:text-slate-200 mt-2"
        >
          <p>Online Selling</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="p-4 mt-6 bg-secondary">
        <h1 className="uppercase text-primary">subscribe</h1>
        <h1 className="mt-3 text-2xl font-semibold text-slate-200">
          Get Newsletter
        </h1>
        <div
          className="flex
    items-center justify-between px-2 py-1 bg-[#ffffff] mt-3"
        >
          <input
            type="text"
            className="bg-transparent border-none outline-none text-slate-200"
            placeholder="Email.."
          />
          <button className="btn btn-primary !p-2 rounded">
            <FiSend />
          </button>
        </div>
      </div>
      <div className="mt-5 ">
        <Image
          src="https://www.mckinsey.com/~/media/mckinsey/industries/healthcare%20systems%20and%20services/our%20insights/meeting%20changing%20consumer%20needs%20the%20us%20retail%20pharmacy%20of%20the%20future/us-retail-pharmacy-thumb-1536x1536.jpg"
          width={1200}
          height={100}
          alt=""
          className="sm:h-[400px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ServicesFilter;

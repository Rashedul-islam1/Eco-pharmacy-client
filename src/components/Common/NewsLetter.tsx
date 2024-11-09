import { FiArrowRight } from "react-icons/fi";
const NewsLetter = () => {
  return (
    <div className=" bg-primary rounded-xl text-slate-100 py-10">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl mb-2 font-semibold capitalize">
          subscribe to our newsletter
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          earum.
        </p>
      </div>
      <div className="mt-3 flex justify-center ">
        <div className="justify-center flex-align-center gap-x-2">
          <input
            type="email"
            className="px-4 w-[300px] text-secondary py-1 border-none rounded outline-none"
            placeholder="Email address..."
          />
          <button className="p-2 rounded-md btn-secondary">
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

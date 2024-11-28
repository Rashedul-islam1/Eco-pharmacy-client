import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/ZSdhcGg/banner.webp")`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" bg-[#ffffff] min-h-[400px] md:min-h-[600px]  max-w-7xl mx-auto px-5 md:px-10 flex items-center font-questrial"
    >
      <div className="space-y-3 lg:space-y-4">
        <h2 className="font-extrabold capitalize text-4xl md:text-6xl  lg:text-7xl text-primary">
          Hot offer!
        </h2>
        <h2 className="font-semibold capitalize text-3xl md:text-5xl  lg:text-6xl  text-secondary">
          Pain Relievers from $6.99
        </h2>

        <p className=" text-secondary text-lg md:text-xl w-[70%] pb-4">
          There are a large number of painkillers available and they all come in
          various different brand names.
        </p>

        <a href="/products">
          <button className="rounded-full px-3.5 py-1.5 text-base  bg-primary hover:bg-primary/90 text-white duration-300">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;

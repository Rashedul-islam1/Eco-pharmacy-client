import { brands } from "@/data/dummyData";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center mx-auto">
        <h1 className="mx-auto sub-heading">brands</h1>
        <h1 className="heading">our brands</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          quia eius quaerat, quas deleniti sed. Sapiente illo architecto!
        </p>
      </div>
      <div className="flex-wrap p-4 mt-8 flex justify-center items-center gap-x-16 gap-y-5">
        {brands.map((image, i) => (
          <div className="group" key={i}>
            <Image
              src={image}
              width={1200}
              height={100}
              alt=""
              className="w-20 group-hover:scale-125 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

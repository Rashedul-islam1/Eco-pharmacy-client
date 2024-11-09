import adsImage2 from "../../../public/images/image2.webp";
import adsImage3 from "../../../public/images/image3.webp";
import adsImage4 from "../../../public/images/image4.webp";
import adsImage5 from "../../../public/images/image5.webp";
import adsImage1 from "../../../public/images/imges1.webp";

import Image, { StaticImageData } from "next/image";

interface adsType {
  title: string;
  subTitle: string;
  image: StaticImageData;
}

function AdsCard({ title, subTitle, image }: adsType) {
  return (
    <div className="relative rounded h-[450px]">
      <Image
        className=" object-cover h-full w-full rounded"
        src={image}
        alt={title}
        layout="fill"
      />
      {/* <div className="absolute inset-0 bg-primary/30  overflow-hidden rounded" /> */}
      <div className="absolute top-3 py-4 text-center flex flex-col w-full">
        <div className="absolute top-3 py-4 pr-4 flex flex-col text-right w-full space-y-3">
          <h1 className="text-[#ffffff] mt-1 text-4xl md:text-5xl lg:text-4xl font-bold pl-8">
            {title}
          </h1>
          <h2 className="text-xl text-[#ffffff]">{subTitle}</h2>

          <div className="flex justify-end">
            <button className="mt-3 rounded-full hover:bg-[#f5fffe] duration-300 bg-white text-primary font-semibold px-6 py-2">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function AdsCard2({ title, subTitle, image }: adsType) {
  return (
    <div className="relative  h-[300px] rounded">
      <Image
        className=" object-cover rounded h-full w-full"
        src={image}
        alt={title}
        layout="fill"
      />
      {/* <div className="absolute rounded inset-0 bg-primary/30  overflow-hidden" /> */}
      <div className="absolute top-3 py-4 text-center flex flex-col w-full">
        <div className="absolute top-3 py-4 pr-4 flex flex-col text-right w-full space-y-2">
          <h1 className="text-[#ffffff] mt-1 text-4xl md:text-5xl lg:text-4xl font-bold pl-8">
            {title}
          </h1>
          <h2 className="text-xl text-[#ffffff]">{subTitle}</h2>
          <div className="flex justify-end">
            <button className="mt-3 rounded-full hover:bg-[#f5fffe] duration-300 bg-white text-primary font-semibold px-6 py-2">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Offers = () => {
  return (
    <div className="max-w-7xl lg:px-10 mx-auto space-y-5 py-20 px-0">
      <div className=" gap-5  grid lg:grid-cols-3  grid-cols-1">
        <AdsCard
          title="SPECIAL OFFERS ON"
          subTitle="Cough Syrup"
          image={adsImage1}
        />
        <AdsCard
          title="MULTI VITAMIN TABLETS"
          subTitle="Get 20% Offer"
          image={adsImage2}
        />
        <AdsCard
          title="30% DISCOUNT ON"
          subTitle="Fish Oil Tablets"
          image={adsImage3}
        />
      </div>
      <div className=" gap-5 grid lg:grid-cols-2 grid-cols-1">
        <AdsCard2
          title="SAVE UPTO 20% ON"
          subTitle="Cardio Productive Medicines"
          image={adsImage4}
        />
        <AdsCard2
          title="Health Products"
          subTitle="Upto 10% OFF"
          image={adsImage5}
        />
      </div>
    </div>
  );
};

export default Offers;

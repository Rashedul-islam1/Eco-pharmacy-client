import Image from "next/image";
import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";
const AboutUs = () => {
  return (
    <div className="pt-16 pb-20 max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem]">
          <Image
            width={1200}
            height={100}
            src="https://freece-h0cmazbmdybhasg0.a03.azurefd.net/wp-content/uploads/2023/03/what-is-community-pharmacy-and-the-role-of-the-pharmacist-locally.jpeg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <Image
            src={
              "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_767264_17026085412196537.jpg"
            }
            alt=""
            width={1200}
            height={100}
            className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          <h1 className="sub-heading">about us</h1>
          <h1 className="heading">we decorate your home environment</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
            earum saepe quibusdam, temporibus aut sapiente, ea alias libero,
            ipsam perferendis. Consectetur maiores, dicta.
          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiHomeAlt />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  the perfect residency
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, quisquam?
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiGlobe />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  global architect experts
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, quisquam?
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiCreditCard />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  total payment transparency
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, quisquam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

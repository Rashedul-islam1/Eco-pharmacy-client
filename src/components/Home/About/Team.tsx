import { teamMembers } from "@/data/dummyData";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="pt-10 pb-16 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">our team</h1>
        <h1 className="heading">meet with our experienced team</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-3 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.slice(0, 4).map(({ id, name, role, image }) => (
            <div className="h-[250px] w-full mb-16 lg:mb-0" key={id}>
              <Image
                width={1200}
                height={100}
                src={image}
                alt={name}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="relative z-10 w-4/5 p-2 mx-auto -mt-10 text-center bg-white rounded-lg shadow-md dark:bg-dark-light">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p>{role}</p>
                <div className="mt-3 flex justify-center items-center gap-x-3">
                  <div className="hover:text-primary transition-a">
                    <FaFacebook />
                  </div>
                  <div className="hover:text-primary transition-a">
                    <FaInstagram />
                  </div>
                  <div className="hover:text-primary transition-a">
                    <FaTwitter />
                  </div>
                  <div className="hover:text-primary transition-a">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

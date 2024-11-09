import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
  return (
    <div className="bg-white">
      <div className="px-4 py-8 mx-auto lg:max-w-6xl  lg:px-8">
        <h1 className="mx-auto sub-heading">blogs</h1>
        <h2 className="heading text-center">Recent Updation</h2>
        <p className="font-sans text-center mb-12 text-gray-700">
          Accumsan lacus vel facilisis volutpat est velit egestas dui id.
          Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.
        </p>
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          <BlogCard
            image={
              "https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8="
            }
            title="Enhancing Emergency Preparedness"
          />
          <BlogCard
            image={
              "https://www.gigadocs.com/blog/wp-content/uploads/2019/12/Technology-Makes-It-Easy-To-Consult-The-Doctor-Of-Your-Choice.png"
            }
            title="The Importance Of Patient Advocacy"
          />
          <BlogCard
            image={
              "https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_640.jpg"
            }
            title="Standing With Patients Beyond The Clinic"
          />
          <BlogCard
            image={
              "https://cdn.britannica.com/39/198239-050-272F8567/Surgeons-laparoscopy.jpg"
            }
            title="Doctors Driving Multidisciplinary Research"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

const BlogCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="overflow-hidden group transition-shadow duration-300 bg-white rounded ">
      <Image
        width={1200}
        height={100}
        src={image}
        className="object-cover w-full h-[160px]"
        alt=""
      />
      <div className=" py-5 mb-4">
        <p className="text-xs font-semibold font-sans  tracking-wide uppercase ">
          <a
            href="#"
            className="transition-colors duration-200 text-primary hover:text-teal-accent-700 border-r border-gray-300 pr-4"
            aria-label="Category"
            title="date"
          >
            5 SEP 2021
          </a>
          <span className="text-gray-600 px-4">2 comments</span>
        </p>
        <a
          href="#"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 font-semibold pt-3 group-hover:text-primary duration-150 leading-5 text-gray-700"
        >
          {title}
        </a>

        <button className="flex items-center uppercase font-semibold text-sm gap-1 rounded-sm tracking-wide text-secondary  transition-all  cursor-pointer">
          <AiOutlineArrowRight className="p-1 text-2xl bg-primary text-white rounded-full" />{" "}
          Read More{" "}
        </button>
      </div>
    </div>
  );
};

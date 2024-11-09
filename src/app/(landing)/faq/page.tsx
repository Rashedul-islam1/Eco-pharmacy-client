"use client";
import { faqs } from "@/data/dummyData";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const FAQs = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(null);
  const handleBorderClick = (index: any) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h2 className="text-center heading my-6">Frequently Asked Questions</h2>
      {faqs?.map((according, index) => (
        <article key={index} className=" p-3">
          <div
            className={`flex gap-2 text-[#333333] cursor-pointer border-b items-center justify-between w-full ${
              isAccordingOpen === index && " !text-primary"
            }`}
            onClick={() => handleBorderClick(index)}
          >
            <h2 className=" font-[600] text-[1.2rem]">{according.question}</h2>
            {isAccordingOpen === index ? <BiMinus /> : <BiPlus />}
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              isAccordingOpen === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="text-[#424242] text-[0.9rem] overflow-hidden">
              {according.response}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FAQs;

// import SingleFaq from "./SingleFaq";

// const FAQs = () => {
//   return (
//     <div className="max-w-4xl mx-auto py-20">
//       {faqs.map((faq) => (
//         <SingleFaq {...faq} key={faq.id} />
//       ))}
//     </div>
//   );
// };

// export default FAQs;

import { CiFilter } from "react-icons/ci";
import Rating from "react-rating";

const ReviewDetails = () => {
  return (
    <div>
      <p className="text-primary justify-center flex items-center gap-1 text-xs mt-6">
        <Rating
          emptySymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          }
          fullSymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          }
          initialRating={4}
          readonly
        />
      </p>
      <div className="flex justify-center items-center cursor-pointer gap-4 mt-3">
        <h2 className="border-b-[3px] font-semibold border-b-primary">
          Reviews
        </h2>
        <h2 className="font-semibold">Questions</h2>
      </div>
      <div className="w-full h-[1px] bg-primary my-4"></div>
      <div className="flex text-secondary cursor-pointer">
        <CiFilter className="top-[3px] relative" />
        Filters
      </div>
      <div className="w-full h-[1px] bg-secondary/10 my-4"></div>

      <RevCard />
      <RevCard />
      <RevCard />
      <RevCard />
      <RevCard />
    </div>
  );
};

const RevCard = () => {
  return (
    <div className="text-secondary border-b border-b-secondary/10">
      <div className="flex justify-between items-center my-3">
        <h2>Michael</h2>
        <p>07/03/2024</p>
      </div>
      <p className="text-primary text-xs mb-1">
        <Rating
          emptySymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          }
          fullSymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          }
          initialRating={5}
          readonly
        />
      </p>
      <p className="font-semibold text-secondary mb-1">5 Star</p>
      <p>Amazing value and great product!</p>
      <div className="bg-secondary/10 p-1 w-[150px] text-center my-5 rounded-md font-semibold">
        Verified by <span className="font-bold">Shop</span>
      </div>
    </div>
  );
};

export default ReviewDetails;

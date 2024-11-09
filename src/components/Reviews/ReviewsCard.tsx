import Image from "next/image";
import { BsQuote } from "react-icons/bs";
import Rating from "react-rating";

const ReviewsCard = ({ review }: any) => {
  return (
    <div className="flex flex-col justify-between   rounded-md border border-gray-100 bg-white p-4 min-h-[230px]">
      <div>
        <BsQuote className="text-5xl text-[#008db961]" />

        <p className="mb-4 text-sm font-normal leading-relaxed tracking-wide text-gray-400">
          {review?.review.length > 170
            ? `${review?.review.slice(0, 200)}...`
            : review?.review}
        </p>
      </div>

      <div className="flex justify-between w-full items-start ">
        <div className="flex items-start gap-3">
          <Image
            alt=""
            src={review?.image}
            width={1200}
            height={100}
            decoding="async"
            data-nimg="1"
            className="inline-block size-10 rounded-full "
            loading="lazy"
          />

          <div>
            <p className="leading-relaxed tracking-wide text-gray-600">
              {review?.name}
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-700">
              {review?.title}
            </p>
          </div>
        </div>

        <p className=" text-primary text-xs ">
          <Rating
            emptySymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
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
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            }
            initialRating={review?.rating}
            readonly
          />
        </p>
      </div>
    </div>
  );
};

export default ReviewsCard;

"use client";
import { BiHeart, BiStar } from "react-icons/bi";
import ImageShow from "../../components/Modal/ImageShow";

interface CardHoverIconsProps {
  image: string;
}

const CardHoverIcons = ({ image }: CardHoverIconsProps) => {
  return (
    <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:flex gap-x-3">
      <div className="text-white flex items-center gap-x-2">
        <button className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
          <BiHeart />
        </button>
        <ImageShow image={image} />
        <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
          <BiStar />
        </div>
      </div>
    </div>
  );
};

export default CardHoverIcons;

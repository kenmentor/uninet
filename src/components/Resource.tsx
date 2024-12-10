import Link from "next/link";
import React from "react";
import { BiStar } from "react-icons/bi";
import { BsEye, BsStarFill, BsStarHalf } from "react-icons/bs";
import Rating from "./Rating";
type resource = {
  title: String;
  thumbnail: string;
  rating: Number;
  views: Number;
  id: string;
};
const Resource = ({ title, thumbnail, rating, views, id }: resource) => {
  return (
    <Link href={`/${id}/resource-details`}>
      <div className="resourcebox flex flex-col bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
        {/* Thumbnail Section */}
        <div className="thumbnailCont h-64 w-full overflow-hidden">
          <img
            src={thumbnail}
            alt="Resource Thumbnail"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Details Section */}
        <div className="detailCont flex flex-col p-4 gap-2">
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-200">{title}</h2>

          {/* Views and Stars Section */}
          <div className="sub2 flex justify-between items-center">
            {/* Views */}
            <div className="views flex items-center gap-2 text-gray-400">
              <BsEye className="text-gray-500" />
              <p className="text-sm">{views}</p>
            </div>

            {/* Stars */}
            <Rating rating=
              { rating} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Resource;

import React, { type FC } from "react";
import type { IGig } from "../../types";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Button from "./Button";
interface Props {
  item: IGig;
  expand?: boolean;
}

const Card: FC<Props> = ({ item, expand }) => {
  console.log(item);
  return (
    <div>
      <Button id={item._id} show={expand || false} />
      <Link
        to={`/detail/${item._id}`}
        className="p-2 rounded-md cursor-pointer flex flex-col gap-2 group"
      >
        <img
          src={item.coverImage}
          alt={item.title}
          className="h-full w-full object*cover rounded-md max-h-[200px]"
        />
        <div>
          <img
            src={item.user.profilePicture}
            alt={item.user}
            className="size-8 rounded-full"
          />
          <p>
            <span className="font-semibold">created by </span>
            <span className="text-gray-500">{item.user.username}</span>
          </p>
        </div>
        <h2 className="line-clamp-2 group-hover:underline">{item.title}</h2>
        <Rating rating={item.starCount} reviews={item.reviewCount} />
        <p>
          <span className="text-gray-500">price starting at </span>
          <span className="font-semibold">${item.package_price.toLocaleString()}</span>
        </p>
      </Link>
    </div>
  );
};

export default Card;

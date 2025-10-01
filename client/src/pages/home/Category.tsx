import React, { type FC } from "react";
import { categories } from "../../utils/constants";
import { Link } from "react-router-dom";

type Props = {};

const Category: FC = (props: Props) => {
  return (
    <div className="my-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-5">
      {categories.map((i, key) => (
        <Link
          to={`/search?category=${i.name}`}
          key={key}
          className="border shadow p-4 rounded-md border border-zinc-100 cursor-pointer hover:shadow-xl hover:bg-gray-100"
        >
          <div className="text-center flex flex-col gap-3 items-center">
            <span className="text-3xl">{i.icon}</span>
            <span className="font-semibold text-sm">{i.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;

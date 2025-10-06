import React, { type FC } from "react";
import type { IGig, IUser } from "../../types";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import {
  IoIosArrowDown,
  IoIosInformationCircleOutline,
  IoMdCheckmark,
} from "react-icons/io";

interface Props {
  gig: IGig<IUser>;
}

const PackageInfo: FC<Props> = ({ gig }) => {
  return (
    <div className="h-fit flex flex-col gap-8 border shadow rounded-md p-5 mb-20 md:mt-20 md:sticky top-20 border-zinc-200">
      <div className="flex justify-between font-semibold">
        <h2 className="text-xl">{gig.package_title}</h2>
        <p className="text-lg font-normal flex items-center gap-2">
          {gig.package_price}$
          <IoIosInformationCircleOutline title="To keep things simple,Fiverr may round up prices that contain decimals. The number you see here is the price used" />
        </p>
      </div>
      <p className="text-gray-600">{gig.package_description}</p>
      <div className="flex gap-5 font-semibold text-sm whitespace-nowrap">
        <p className="flex items-center gap-2">
          <FaRegClock />
          {gig.package_duration} arrived
        </p>
        <p className="flex items-center gap-2">
          <GiRecycle />
          {gig.package_revisions} arrived
        </p>
      </div>
      <ul>
        {gig.package_features.map((i, key) => (
          <li className="flex items-center gap-2" key={key}>
            <IoMdCheckmark className="text-black" />
            <span className="text-gray-600">{i}</span>
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-3 bg-black text-white hover:bg-zinc-700 transition cursor-pointer p-2 rounded-md">
        <span className="flex-1 font-semibold">Continue</span>
        <FaArrowRight />
      </button>
      <button className="flex items-center justify-center bg-white text-black transition cursor-pointer p-2 gap-2 border border-zinc-300 hover:border-zinc-200 rounded-md">
        <span className="font-semibold">Get Contact</span>
        <IoIosArrowDown />
      </button>
    </div>
  );
};

export default PackageInfo;

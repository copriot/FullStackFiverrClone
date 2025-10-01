import React, { type FC } from "react";
import { IoMdSearch } from "react-icons/io";

type Props = {};

const Hero: FC = (props: Props) => {
  return (
    <div className="bg-f-green max-md:m-[-20px] h-[40vh] text-white px-6 py-5 md:px-12 md:py-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-light md:text-center">
        Scale your professional workforce with
        <span className="font-serif"> freelancers.</span>
      </h1>
      <form className="bg-white rounded-md w-full flex gap-5 mt-10">
        <input
          type="text"
          className="flex-1 p-2 rounded-md text-black outline-none"
          placeholder="Search gigs..."
        />
        <button className="bg-f-green m-1 p-2 rounded-md hover:opacity-75 transition cursor-pointer">
          <IoMdSearch />
        </button>
      </form>
    </div>
  );
};

export default Hero;

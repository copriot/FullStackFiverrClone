import React, { type FC, type FormEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type Props = {};

const Hero: FC<Props> = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const text = e.currentTarget.search.value;
    if (!text.trim()) return; // boşsa hiçbir şey yapma
    navigate(`/search?query=${encodeURIComponent(text.trim())}`);
  };

  return (
    <div className="bg-f-green max-md:m-[-20px] h-[40vh] text-white px-6 py-5 md:px-12 md:py-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-light md:text-center">
        Scale your professional workforce with
        <span className="font-serif"> freelancers.</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md w-full flex gap-5 mt-10"
      >
        <input
          name="search"
          type="text"
          className="flex-1 p-2 rounded-md text-black outline-none"
          placeholder="Search gigs..."
        />
        <button
          type="submit"
          className="bg-f-green m-1 p-2 rounded-md hover:opacity-75 transition cursor-pointer"
        >
          <IoMdSearch />
        </button>
      </form>
    </div>
  );
};

export default Hero;

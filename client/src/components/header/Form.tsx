import React, { type FormEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const text = e.currentTarget.search.value;
    navigate(`/search?query=${text}`);
    console.log(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex border rounded overflow-hidden max-w-[500px]"
    >
      <input
        name={"search"}
        type="text"
        defaultValue={searchParams.get("query") || undefined}
        className="w-full h-full px-3 py-2 outline-none border-f-green"
      />
      <button className="p-2 text-xl bg-f-green text-white max-sm:hidden cursor-pointer hover:brightness-75">
        <IoMdSearch />
      </button>
    </form>
  );
};

export default Form;

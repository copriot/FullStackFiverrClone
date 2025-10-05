import React, { type FC } from "react";
import { useDeleteGig } from "../../service/gig";
import Loader from "../loader/Loader";

interface Props {
  id: string;
  show: boolean;
}

const Button: FC<Props> = ({ id, show }) => {
  const { mutate, isPending } = useDeleteGig(id);
  const handleClick = () => {
    if (confirm("Accept to delete")) return;
    mutate();
  };
  return (
    show && (
      <div className="flex justify-end px-2">
        <button
          disabled={isPending}
          onClick={handleClick}
          className="button bg-red-500 cursor-pointer"
        >
          {isPending ? <Loader designs="text-base !text-white" /> : "Delete"}
        </button>
      </div>
    )
  );
};

export default Button;

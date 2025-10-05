import React, { type FC } from "react";
import { FaSpinner } from "react-icons/fa";

interface Props {
  designs?: string;
}

const Loader: FC<Props> = ({ designs }) => {
  return (
    <div className={`flex justify-center ${designs}`}>
      <FaSpinner className="text-green-500 animate-spin" />
    </div>
  );
};

export default Loader;

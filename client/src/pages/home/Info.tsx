import { type FC } from "react";
import { items } from "../../utils/constants";
import { FaCheckCircle } from "react-icons/fa";
type Props = {};

const Info: FC = (props: Props) => {
  return (
    <div className="bg-emerald-100 bg-opacity-100/70 rounded p-4 sm:p-6 my-10">
      <h1 className="text-3xl">
        <span className="font-extrabold">fiverr</span>
        <span>.pro</span>
      </h1>
      <p className="text-3xl font-light my-6 sm:my-8">
        A <span className="text-emerald-400">premium</span> freelance solution for
        businesses
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(({ title, text }, key) => (
          <div key={key}>
            <h5>
              <FaCheckCircle className="text-lg" />
            </h5>
            <h5 className="font-semibold flex items-center gap-3">{title}</h5>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6 sm:my-8">
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800 hover:cursor-pointer">
          Şimdi Dene
        </button>
      </div>
    </div>
  );
};

export default Info;

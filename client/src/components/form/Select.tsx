import React, { type FC } from "react";
import type { ICategory } from "../../types";

interface Props {
  label: string;
  options: ICategory[];
  name?: string;
}

const Select: FC<Props> = ({ label, options, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-medium text-gray-700">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500 placeholder:gray-400"
      >
        {options.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

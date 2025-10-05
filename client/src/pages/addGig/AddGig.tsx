import React from "react";
import { categories, inputs } from "../../utils/constants";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";

const AddGig = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-5 text-gray-600">Create a new gig</h1>
      <form>
        <div className="grid md:grid-cols-2 gap-x-10">
          {inputs.map((input, key) => (
            <Input {...input} key={key} />
          ))}
          <Select label="Category" options={categories} name="category" />
        </div>

        <div className="flex md:justify-center my-5">
          <button className="border border-teal-500 bg-teal-300 hover:bg-teal-400/20 px-2 py-1 rounded-md cursor-pointer flex justify-center max-md:w-full w-1/2 disabled:opacity:80">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGig;

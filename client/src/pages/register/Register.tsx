import React, { useState, type FormEvent } from "react";
import Input from "../../components/form/Input";
import Toggle from "../../components/form/Toggle";
import { Link } from "react-router-dom";

const Register = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const newUser = { ...userData, isSeller: isChecked };
    console.log(newUser);
  };

  return (
    <div className="max-w-[900px] mx-auto">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 md:gap-10 md:pt-24">
        <div>
          <h1 className="title">Create new account</h1>
          <Input label="Name" name="username" />
          <Input label="Email" name="email" type="email" />
          <Input label="Photograph" name="profilePicture" type="file" />
          <Input label="Ülke" name="country" />
          <Input label="Şifre" name="password" type="text" />
        </div>

        <div>
          <h1 className="title">I would like to become a seller.</h1>
          <Toggle setIsChecked={setIsChecked} />
          <Input label="Phone" name="phone" disabled={!isChecked} required={!isChecked} />
          <Input
            label="Description"
            name="description"
            type="textarea"
            disabled={!isChecked}
            required={!isChecked}
          />
          <button className="form-button">Register</button>
          <p className="mt-5 text-gray-500">
            Do you have any account ?
            <Link to="/login" className="ms-3 text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

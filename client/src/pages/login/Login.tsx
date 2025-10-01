import React, { type FormEvent } from "react";
import Input from "../../components/form/Input";
import { Link } from "react-router-dom";
import type { ILoginData } from "../../types";
import { useLogin } from "../../service/auth";

const Login = () => {
  const { mutate, isPending } = useLogin();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as unknown as ILoginData;
    mutate(userData);
  };
  return (
    <div className="pt-24 max-w-[500px] mx-auto sm:min-w-[400px] max-sm:w-full">
      <h1 className="title mb-10">Login to your account</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Name" name="username" />
        <Input label="Password" name="password" />

        <button className="form-button" disabled={isPending}>
          Login
        </button>
      </form>

      <p className="mt-5 text-gray-500">
        Don't you have account?
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;

import type { JSX } from "react";

interface ILoginData {
  username: string;
  password: string;
}

interface IRegisterData {
  username: string;
  email: string;
  profilePicture: File;
  password: string;
  isSeller?: boolean;
  phone?: string;
  description?: string;
}

interface IUser {
  username: string;
  email: string;
  country: string;
  profilePicture: string;
  isSeller: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

interface AuthResponse {
  message: string;
  user: IUser;
}

interface ICategory {
  name: string;
  icon: JSX.Element;
}
interface IInfo {
  title: string;
  text: string;
}
interface IInput {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  min?: number;
  max?: number;
  multiple?: boolean;
}

export type { ILoginData, IRegisterData, IUser, AuthResponse, ICategory, IInfo, IInput };

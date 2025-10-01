import { Request } from "express";

export interface RegisterBody {
  username: string;
  email: string;
  password: string;
  country: string;
  isSeller?: boolean;
  profilePicture: string;
  phone?: string;
  description: string;
}

export interface LoginBody {
  username: string;
  password: string;
}

type RegisterReq = Request<{}, {}, RegisterBody>;
type LoginReq = Request<{}, {}, LoginBody>;
type ExtendedFiles = {
  coverImage: { path: string }[];
  images: { path: string }[];
};

type Query = {
  category?: string;
  userId: string;
  min?: string;
  max?: string;
  search?: string;
};
type Filters = {
  category?: string;
  package_price?: {
    $gte?: string;
    $lte?: string;
  };
  title?: {
    $regex: string;
    $options: string;
  };
};
export { RegisterReq, LoginReq, ExtendedFiles, Query, Filters };

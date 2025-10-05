import React, { type FC } from "react";
import { useParams } from "react-router-dom";
import { useGetOneGig } from "../../service/gig";
import Loader from "../../components/loader/Loader";
import type { AxiosError } from "axios";
import Error from "../../components/error/Error";
import BreadCrumb from "./BreadCrumb";
import GigInfo from "./GigInfo";
import UserInfo from "./UserInfo";
import PackageInfo from "./PackageInfo";

const Detail: FC = () => {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = useGetOneGig(id as string);

  if (isLoading) return <Loader designs="my-40" />;
  if (error)
    return <Error error={error as AxiosError<{ message: string }>} refetch={refetch} />;
  if (!data) return <p className="warning">Removed or nothing</p>;
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="overflow-y-auto">
        <BreadCrumb category={data.category} />
        <GigInfo gig={data} />
        <UserInfo user={data.user} />
      </div>
      <PackageInfo gig={data} />
    </div>
  );
};

export default Detail;

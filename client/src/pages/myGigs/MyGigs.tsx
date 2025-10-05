import React, { type FC } from "react";
import { useProfile } from "../../service/auth";
import { useGetAllGigs } from "../../service/gig";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
import Card from "../../components/card/Card";
import type { Err } from "../../types";

const MyGigs: FC = () => {
  const { user } = useProfile();

  const { isLoading, error, data, refetch } = useGetAllGigs({ userId: user!.id });
  console.log(data);
  return (
    <div>
      <h1 className="font-bold text-3xl mb-5 text-gray-600">My Gigs</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error error={error as Err} refetch={refetch} />
        ) : (
          data && (
            <div className="layout">
              {data.data.gigs.map((item) => (
                <Card key={item._id} item={item} expand />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MyGigs;

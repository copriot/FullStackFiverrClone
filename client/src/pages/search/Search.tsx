import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetAllGigs } from "../../service/gig";
import Title from "./Title";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
import Card from "../../components/card/Card";

type Props = {};

const Search = (props: Props) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");

  const params = {
    category,
    search: query,
  };
  const { data, isLoading, isError, refetch } = useGetAllGigs(params);

  console.log("Data:", data);

  return (
    <div>
      <Title category={category} search={query} />

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error refetch={refetch} error={isError as Error} />
      ) : data ? (
        <div className="layout">
          {data?.data.gigs.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p>No gigs found</p>
      )}
    </div>
  );
};

export default Search;

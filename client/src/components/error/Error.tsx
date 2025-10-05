import type { FC } from "react";
import type { AxiosError } from "axios";

interface Props {
  error: AxiosError<{ message?: string }>;
  refetch?: () => void;
}

const Error: FC<Props> = ({ error, refetch }) => {
  const info = error?.response?.data?.message;

  return info === "Aranılan kriterlere uygun hizmet bulunamadı" ? (
    <div className="warning font-semibold my-40 text-center text-gray-600">No Result</div>
  ) : (
    <div className="py-10 px-5 text-lg rounded-lg bg-red-500/70 text-white text-center my-40">
      <p className="font-semibold">{info || "Bir hata oluştu"}</p>
      <p>Please try again later</p>

      {refetch && (
        <button
          className="border mt-3 rounded-md px-3 py-1 hover:bg-white/20 transition cursor-pointer"
          onClick={refetch}
        >
          Try again
        </button>
      )}
    </div>
  );
};

export default Error;

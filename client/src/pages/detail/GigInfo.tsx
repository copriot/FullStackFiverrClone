import React, { type FC } from "react";
import type { IGig } from "../../types";
import Rating from "../../components/card/Rating";
import { Splide, SplideSlide } from "@splidejs/react-splide";
//@ts-expect-error tsImportDoesntHave
import "@splidejs/react-splide/css";
interface Props {
  gig: IGig & { user: { profilePicture: string; username: string } };
}

const GigInfo: FC<Props> = ({ gig }) => {
  return (
    <div className="flex-1 flex flex-col gap-5">
      <h1 className="font-bold text-xl md:text-2xl">{gig.title}</h1>
      {/* gig infos */}
      <div className="flex gap-3 items-center">
        <img
          src={gig.user.profilePicture}
          alt="Profile"
          className="size-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{gig.user?.username}</h4>
          <Rating rating={gig.starCount} reviews={gig.reviewCount} />
        </div>
      </div>
      {/* PictureGaleries */}
      <Splide>
        {gig.images.map((url, key) => (
          <SplideSlide key={key}>
            <img
              src={url}
              alt={"image"}
              className="h-[30vh] w-full object-fill md:h-[50vh]"
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* aboutGig */}
      <div>
        <h1 className="font-bold text-lg mt-5 mb-2">About this gig</h1>
        <p className="text-gray-600">{gig.description}</p>
      </div>
    </div>
  );
};

export default GigInfo;

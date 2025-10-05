import React from "react";
import type { GetAllParams } from "../../types";

const Title = ({ category, search }: GetAllParams) => {
  return (
    <div>
      <h1>
        {search ? (
          <p>
            <span className="font-bold">{search}</span> searched results
          </p>
        ) : (
          <p>
            <span className="font-bold">{category}</span> category results
          </p>
        )}
      </h1>
    </div>
  );
};

export default Title;

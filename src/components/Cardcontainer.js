import React, { memo } from "react";
import Card from "./Card";

const Cardcontainer = (props) => {
  const { episodes } = props;
  return (
    <div className="ccontainer d-flex flex-row flex-wrap justify-content-center mb-4">
      {episodes.map((episode) => (
        <Card {...episode} key={episode.id} />
      ))}
    </div>
  );
};
export default memo(Cardcontainer);

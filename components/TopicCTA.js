import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function TopicCTA({ text }) {
  return (
    <>
      <div className="intent">
        <h2 className="text-xl">{text}</h2>
        <ArrowForwardIosRoundedIcon className="text-gray-700" />
      </div>
    </>
  );
}

export default TopicCTA;

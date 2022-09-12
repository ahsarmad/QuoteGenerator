import React from "react";

const Quotes = ({ data }) => {
  return (
    <div>
      <blockquote>{data[0].quote}</blockquote>
      <p>-{data[0].name}</p>
    </div>
  );
};

export default Quotes;

import React from "react";

const Quotes = ({ data }) => {
  return (
    <div>
      <blockquote>{data.quote}</blockquote>
      <p>-{data.name}</p>
    </div>
  );
};

export default Quotes;

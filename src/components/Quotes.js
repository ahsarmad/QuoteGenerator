import React from "react";

const Quotes = ({ data }) => {
  return (
    <div>
      <blockquote>{data.quote}</blockquote>
      <p className="name">-{data.name}</p>
    </div>
  );
};

export default Quotes;

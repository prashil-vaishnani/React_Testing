import React from "react";

export const Greet = ({ name }) => {
  return <div>Hello {name ? name : "devil"}</div>;
};

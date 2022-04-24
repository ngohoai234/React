import React from "react";

import { useSelector } from "react-redux";

const Test = () => {
  const state = useSelector((state) => state);
  return <div>Test</div>;
};

export default Test;

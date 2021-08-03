import { useState, useEffect } from "react";

const Screen = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("1+5");
  }, [value]);

  return <div className="screen">{value}</div>;
};

export default Screen;

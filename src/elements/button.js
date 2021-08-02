import { useState } from "react";
import { useEffect } from "react";

const Button = (props) => {
  const { gridColumn, text: textProp } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    setText(textProp);
  }, [textProp]);

  return (
    <div className="button" style={gridColumn && { gridColumn }}>
      {text}
    </div>
  );
};

export default Button;

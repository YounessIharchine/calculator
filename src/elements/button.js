import { useState } from "react";
import { useEffect } from "react";

const Button = (props) => {
  const { borderColor, gridColumn, text } = props;
  const { darker, lighter } = props.backgroundColors
    ? props.backgroundColors
    : { undefined };

  const [value, setValue] = useState("");

  let style;
  if (gridColumn) {
    if (darker) {
      style = {
        borderColor,
        background: `linear-gradient(${lighter}, ${darker})`,
        gridColumn,
      };
    } else {
      style = { gridColumn };
    }
  } else {
    if (darker) {
      style = {
        borderColor,
        background: `linear-gradient(${lighter}, ${darker})`,
      };
    }
  }

  useEffect(() => {
    setValue(text);
  }, [text]);

  return (
    <div className="button" style={style}>
      {value}
    </div>
  );
};

export default Button;

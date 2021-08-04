import { useContext } from "react";
import CalculatorContext from "../context/calculatorContext";

const Point = () => {
  const { addPoint } = useContext(CalculatorContext);

  return (
    <div className="button" onClick={addPoint}>
      .
    </div>
  );
};
export default Point;

import { useContext } from "react";
import CalculatorContext from "../context/calculatorContext";

const AC = () => {
  const { emptyScreen } = useContext(CalculatorContext);

  return (
    <div className="button ac" onClick={emptyScreen}>
      AC
    </div>
  );
};
export default AC;

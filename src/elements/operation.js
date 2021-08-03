import { useContext } from "react";
import CalculatorContext from "../context/calculatorContext";

const Operation = ({ operation }) => {
  return <div className="button">{operation}</div>;
};
export default Operation;

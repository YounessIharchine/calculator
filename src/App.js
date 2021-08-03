import "./App.css";
import { useState, createContext } from "react";
import Screen from "./elements/screen";
import Button from "./elements/button";

const CalculatorContext = createContext();

function App() {
  const [value, setValue] = useState("aaaaaaaaaaaaaaabbbbbbbbbbBBBBBBBBBBBBBB");

  return (
    <CalculatorContext.Provider value={{}}>
      <div className="wrapper">
        <Screen value={value} />
        <Button
          borderColor="#d57372"
          backgroundColors={{ darker: "#f96a67", lighter: "#f59580" }}
          gridColumn={"span 2"}
          text="AC"
        />{" "}
        <Button text="CE" />
        <Button text="/" />
        <Button text="7" /> <Button text="8" /> <Button text="9" />
        <Button text="x" />
        <Button text="4" /> <Button text="5" /> <Button text="6" />
        <Button text="-" />
        <Button text="1" /> <Button text="2" /> <Button text="3" />
        <Button text="+" />
        <Button text="0" /> <Button text="." /> <Button text="ANS" />
        <Button
          borderColor="#d59372"
          backgroundColors={{ darker: "#ffc21a", lighter: "#f6cb55" }}
          text="="
        />
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;

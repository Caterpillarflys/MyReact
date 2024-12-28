import { useState } from "react";
import "./App.css";
import Son from "./components/son";

function App() {
  const divStyle = {
    border: "1px solid red",
    width: "400px",
    height: "400px",
    margin: "20px",
  };
  const [name, setName] = useState("无名");
  return (
    <div className="App" style={divStyle}>
      父：
      <Son name={name} setSonName={(val) => setName(val)}></Son>
      <button
        onClick={() => setName((val) => (val === "无名" ? "有名" : "无名"))}
      >
        点击改变名称
      </button>
    </div>
  );
}

export default App;

import { useState } from "react";
import Son from "./son";
import { useSelector } from "react-redux";

// 直接引入并使用的话，虽然Redux状态变化了，但不会自动更新，
// 需要利用 react-redux 提供的 useSelector 钩子来订阅状态变化
// import store from "../store/store";
// store.getState().module1.count;

function Father() {
  const divStyle = {
    border: "1px solid red",
    width: "400px",
    height: "400px",
  };
  const [name, setName] = useState("无名");
  const count = useSelector((state) => state.module1.count);

  return (
    <div style={divStyle}>
      父：
      <Son name={name} setSonName={(val) => setName(val)}></Son>
      <div>{name}</div>
      <button
        onClick={() => setName((val) => (val === "无名" ? "有名" : "无名"))}
      >
        父传子
      </button>
      <div>使用redux的全局计数器：{count}</div>
    </div>
  );
}

export default Father;

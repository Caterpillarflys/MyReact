import React from "react";
import { useNavigate } from "react-router-dom";

// 生成指定范围的随机整数，模拟动态路由id参数
const crateRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const pages = () => [
  {
    type: "home",
    name: "首页",
  },
  {
    type: "about",
    name: "关于",
  },
  {
    type: "about/team",
    name: "关于/团队",
  },
  {
    type: "about/history",
    name: "关于/历史",
  },
  {
    type: `blog/${crateRandomNumber()}`,
    name: "博客",
  },
  {
    type: "dashboard",
    name: "信息看板",
  },
];

const btnStyle = {
  margin: "4px",
};

const NavCom = () => {
  const navigate = useNavigate();
  const handleClick = (type) => {
    navigate(type);
  };
  return (
    <div>
      <div>
        {pages().map((item) => {
          return (
            <button
              style={btnStyle}
              onClick={() => handleClick(item.type)}
              key={item.type}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default NavCom;

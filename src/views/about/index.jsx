import React from "react";

// 这里的Outlet是一个特殊的组件，它用于显示嵌套路由的内容。
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <div>
        嵌套子路由：
        <Outlet />
      </div>
    </div>
  );
};
export default About;

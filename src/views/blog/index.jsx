import React from "react";
import { useParams, useLocation } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <div>当前动态路由是：{location.pathname}</div>
    </div>
  );
};

export default BlogPost;

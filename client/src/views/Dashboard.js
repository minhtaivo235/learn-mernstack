import React, { useContext, useEffect } from "react";
import { PostContext } from "../contexts/PostContext";

const Dashboard = () => {
  const {
    postState: { posts, postsLoading },
    getPosts,
  } = useContext(PostContext);
  
  useEffect(() => {
    getPosts();
  }, []);
  return <h1>Dashboard</h1>;
};

export default Dashboard;

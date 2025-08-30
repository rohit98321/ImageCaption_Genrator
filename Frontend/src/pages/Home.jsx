import React from "react";
import CreateButton from "./post/CreateButton";
import { useSelector } from "react-redux";
import PostCard from "./post/PostCard";

const Home = () => {
  const list = useSelector((state) => state.post.posts);

  const render = list.map((post) => <PostCard key={post._id} post={post} />);

  return (
    <div className="my-5  grid gap-4">
      <CreateButton />

       <div className="flex flex-wrap gap-10">{render}</div>
    </div>
  );
};

export default Home;

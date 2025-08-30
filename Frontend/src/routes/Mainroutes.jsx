import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/user/Login";
import Post from "../pages/user/Post";
import Register from "../pages/user/Register";
import Home from "../pages/Home";
import Logout from "../pages/user/Logout";
import UserAuth from "./UserAuth";
import PageNotFound from "../pages/PageNotFound";

import CaptionGenrate from "../pages/post/CaptionGenrate";
import UnAuth from "./UnAuth";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <UnAuth>
              <Login />
            </UnAuth>
          }
        />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/post"
          element={
            <UserAuth>
              <Post />
            </UserAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <UserAuth>
              <Logout />
            </UserAuth>
          }
        />

        <Route
          path="/createpost"
          element={
            <UserAuth>
              <CaptionGenrate />
            </UserAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default Mainroutes;

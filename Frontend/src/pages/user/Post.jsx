import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncPost } from "../../redux/actions/postAction";

const Post = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const postHandler = (post) => {
    // console.log(post);
    // dispatch(asyncPost(post));
  };

  return (
    <div className="flex justify-center items-center  h-screen w-full border">
      <form
        onSubmit={handleSubmit(postHandler)}
        className="grid p-5 gap-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
      >
        <input
          className="border-b outline-0 py-2 w-full"
          {...register("username")}
          type="text"
          placeholder="Username"
        />

        <input
          className="border-b outline-0 py-2 w-full"
          {...register("password")}
          type="text"
          placeholder="password"
        />

        <button
          className="bg-white text-black font-semibold uppercase rounded-lg w-1/2 h-15 mx-auto"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Post;

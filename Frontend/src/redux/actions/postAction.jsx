import axios from "../../api/config";
import { toast } from "react-toastify";
import { loadpost } from "../slices/post.slice";

export const asyncPost = (post) => async (dispatch, getstate) => {
  try {
    const {data} = await axios.post("/auth/posts", post);
    toast.info("uploading...")
    toast.success(data.message)
    dispatch(asyncGetPost())
  } catch (error) {
    console.log(error);
  }
};

export const asyncGetPost = () => async (dispatch, getstate) => {
  const {data} = await axios.get("/auth/posts/list");

  dispatch(loadpost(data.list))
  
  console.log( "getposts", data);
};

import { createContext, useState, useEffect } from "react";
import axios from "axios"

const PostListContext = createContext();

const usePosts = () => {
  const [postList, setPostList] = useState([]);
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((resp) => {
        const postData = resp.data;
        setPostList(postData);
        console.log(postData);
      });
  }, []);

  return { postList };
};

export { PostListContext, usePosts };

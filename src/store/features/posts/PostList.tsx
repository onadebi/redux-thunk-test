import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { allPosts, getPostsError, getPostsStatus } from "../../RootReducer";
import { fetchPosts } from "./PostsSlice";
import "./posts.scss";

import { useAppDispatch } from "../../store";
import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(allPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  //const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));
  //Alternative::>// const orderedPosts = posts.slice().sort((a,b)=> b.date.toISOString().localeCompare(a.date.toISOString()));

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));
    content = orderedPosts.map((post, index)=> <PostExcerpt key={post.id} post={post} />)
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;

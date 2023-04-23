import React from "react";
import { useSelector } from "react-redux";
import { allPosts} from "../../RootReducer";
import "./posts.scss";
import PostAuthor from './PostAuthor';
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const posts = useSelector(allPosts);

  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));
  //Alternative::>// const orderedPosts = posts.slice().sort((a,b)=> b.date.toISOString().localeCompare(a.date.toISOString()));

  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article key={post.id} className="single-post-summary">
        <h3>{post.title}</h3>
        <PostAuthor userId={post.userId} key={post.userId} />
        <p>
          <TimeAgo date={post.date} key={post.id}/>
        </p>
        <p>{post.content.substring(0, 100)}</p>
        <ReactionButtons post={post} key={post.id}/>
      </article>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;

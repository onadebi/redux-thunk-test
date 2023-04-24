import React from "react";
import { PostsType } from "./PostsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

interface IProps {
  post: PostsType;
}

const PostExcerpt: React.FC<IProps> = ({ post }) => {
  return (
    <article className="single-post-summary">
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        &nbsp;, <TimeAgo date={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;

import React from "react";
import { allUsers } from "../../RootReducer";
import { useSelector } from "react-redux";

export interface IProps {
  userId?: string;
}

const PostAuthor: React.FC<IProps> = ({ userId }) => {
  const users = useSelector(allUsers);
  const user = users.find(u=> u.id === userId);
  return <span>{user ? user.name: 'Unknown author'}</span>;
};

export default PostAuthor;

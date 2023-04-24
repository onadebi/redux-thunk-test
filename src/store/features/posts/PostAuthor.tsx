import React from "react";
import { allUsers } from "../../RootReducer";
import { useSelector } from "react-redux";

export interface IProps {
  userId: number;
}

const PostAuthor: React.FC<IProps> = ({ userId }) => {
  const users = useSelector(allUsers);
  const user = users.find(u=> u.id === userId);
  // console.log('The poster user is:: ', JSON.stringify(user))
  return <span>by {user ? user.name: 'Unknown author'}</span>;
};

export default PostAuthor;

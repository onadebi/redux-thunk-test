import React from "react";
// import { useSelector } from 'react-redux';
import { UsersType } from "./UserSlice";
import { useAppSelector } from "../../store";
// import { RootState, useAppSelector } from '../../store';

const UsersList = () => {
  const allUsers: UsersType[] = useAppSelector((state) => state.users); //useSelector((state: RootState)=> state.users);
  let allUserDDL = {};
  if (allUsers) {
    allUserDDL = allUsers.map((user) => (
      <option key={user.id}>{user.name}</option>
    ));
  }
  return allUserDDL;
};

export default UsersList;

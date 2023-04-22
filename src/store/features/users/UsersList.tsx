import React from 'react';
import { useSelector } from 'react-redux';
import { UsersType } from './UserSlice';
import { RootState } from '../../RootReducer';


const UsersList = () => {
    const allUsers: UsersType[] = useSelector((state: RootState)=> state.users);
    let allUserDDL = {};
    if(allUsers){
        allUserDDL = allUsers.map(user=>(
            <option key={user.id}>{user.name}</option>
        ));
    }
  return allUserDDL;
}

export default UsersList
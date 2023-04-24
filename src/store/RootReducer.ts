import { combineReducers } from "@reduxjs/toolkit";

import CounterReducer from './features/counter/Counter.slice';
import { PostsReducer } from "./features/posts/PostsSlice";
import { UserSliceReducer } from "./features/users/UserSlice";
import { RootState } from "./store";

const RootReducer = combineReducers({
    counter: CounterReducer.reducer,
    posts: PostsReducer,
    users: UserSliceReducer,
});



export default RootReducer;

export const allPosts = (state: RootState) => state.posts.posts;
export const allUsers = (state: RootState)=> state.users;
export const getPostsError = (state: RootState) => state.posts.error;
export const getPostsStatus  = (state: RootState) => state.posts.status;

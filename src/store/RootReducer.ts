import { combineReducers } from "@reduxjs/toolkit";

import CounterReducer from './features/counter/Counter.slice';
import { PostsReducer } from "./features/posts/PostsSlice";
import { UserSliceReducer } from "./features/users/UserSlice";

const RootReducer = combineReducers({
    counter: CounterReducer.reducer,
    posts: PostsReducer,
    users: UserSliceReducer,
});


export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;

export const allPosts = (state: RootState) => state.posts;
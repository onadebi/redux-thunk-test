import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export type PostsType = {
    id: string,
    title: string,
    content: string
}
const initialState: PostsType[] = [
    { id: '1', title: 'Learning redux toolkit', content: "I've heard good things about Redux" },
    { id: '2', title: 'Redux slices', content: "Slices brings the thought of Pizza" },
];


const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action: PayloadAction<PostsType>) => {
                console.log('THe post detils is: ', JSON.stringify(action.payload));
                state.push(action.payload)
            },
            prepare: (post: PostsType) => {
                post.id = nanoid();
                return { payload: post };
            }
        }
    }
});

export const PostsReducer = PostsSlice.reducer;
export const { postAdded } = PostsSlice.actions;
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';


export type ReactionsType = 'thumbsUp'|'wow' |'heart'|'rocket'|'coffee' ;
export interface ReactionsTypeCount {
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0
}
export type PostsType = {
    id: string,
    title: string,
    content: string,
    userId?: string,
    date: string,
    reactions: ReactionsTypeCount
}
export const initReactions: ReactionsTypeCount = { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 }
const initialState: PostsType[] = [
    { id: '1', title: 'Learning redux toolkit', content: "I've heard good things about Redux", date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: initReactions },
    { id: '2', title: 'Redux slices', content: "Slices brings the thought of Pizza", date: sub(new Date(), { minutes: 5 }).toISOString(), reactions: initReactions },
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
                post.id = nanoid()
                post.date = (new Date()).toISOString()
                post.reactions = initReactions;
                return { payload: post };
            }
        },
        reactionAdded: (state, action: PayloadAction<{ id: string, reaction: ReactionsType}>) => {
            const { id, reaction } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if (existingPost && existingPost.reactions) {
                existingPost.reactions[reaction]++;
            }
        }
    }
});

export const PostsReducer = PostsSlice.reducer;
export const { postAdded, reactionAdded } = PostsSlice.actions;
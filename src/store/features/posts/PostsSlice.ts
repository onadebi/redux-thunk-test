import { PayloadAction, createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from 'axios';
import appsettings from "../../../configs/appsettings";


export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    try {
        const response = await axios.get(`${appsettings.POSTS_URL}posts`);
        return [...response.data]
    } catch (err: any) {
        return err.message
    }
});

export const addNewPost = createAsyncThunk('post/addNewPost', async (post: PostsType) => {
    try {
        const response = await axios.post(`${appsettings.POSTS_URL}posts`, post);
        return response.data
    } catch (err: any) {
        return err.message
    }
});

export type ReactionsType = 'thumbsUp' | 'wow' | 'heart' | 'rocket' | 'coffee';
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
    body: string,
    userId: number,
    date: string,
    reactions: ReactionsTypeCount
}
export type PostsApiRespType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type PostsApiResp = {
    posts: PostsType[],
    status: PostsApiRespType,//
    error: string | undefined
}
export const initReactions: ReactionsTypeCount = { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 }

const initialState: PostsApiResp = { error: undefined, status: 'idle', posts: [] };


const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action: PayloadAction<PostsType>) => {
                console.log('THe post detils is: ', JSON.stringify(action.payload));
                state.posts.push(action.payload)
            },
            prepare: (post: PostsType) => {
                post.id = nanoid()
                post.date = (new Date()).toISOString()
                post.reactions = initReactions;
                return { payload: post };
            }
        },
        reactionAdded: (state, action: PayloadAction<{ id: string, reaction: ReactionsType }>) => {
            const { id, reaction } = action.payload;
            const existingPost = state.posts.find(post => post.id === id);
            if (existingPost && existingPost.reactions) {
                existingPost.reactions[reaction]++;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostsType[]>) => {
                state.status = 'succeeded';
                // Adding date and reaction sot the payload
                let min = 1;
                const loadedPost = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    post.reactions = initReactions;
                    return post;
                });

                // Add any fetched posts to the array
                state.posts = state.posts.concat(loadedPost);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewPost.fulfilled, (state, action: PayloadAction<PostsType>)=>{
                action.payload.userId = Number(action.payload.userId)
                action.payload.date = new Date().toISOString();
                action.payload.reactions = initReactions;
                state.posts.push(action.payload);
            })
    }
});

export const PostsReducer = PostsSlice.reducer;
export const { reactionAdded } = PostsSlice.actions;
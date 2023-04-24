import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import appsettings from "../../../configs/appsettings";
export type UsersType={
    id: number,
    name: string,
}

const initialState: UsersType[] = []


export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    try {
        const response = await axios.get(`${appsettings.POSTS_URL}users`);
        return [...response.data];
    } catch (error: any) {
        return error.message;
    }
}) 


const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        getAllUsers:(state)=>{
            return state;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state = action.payload;
            return state;
        })
        .addCase(fetchUsers.rejected, (state, action)=>{
            console.log('ERROR::: ', action.payload);
        })
    }
});


export const UserSliceReducer = UserSlice.reducer;

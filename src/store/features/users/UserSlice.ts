import { createSlice } from "@reduxjs/toolkit";
export type UsersType={
    id: string,
    name: string,
}

const initialState: UsersType[] = [
    {id: '1', name:'Upchurch'},
    {id: '2', name:'Dotan K.'}
]



const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        getAllUsers:(state)=>{
            return state;
        },
    }
});


export const UserSliceReducer = UserSlice.reducer;

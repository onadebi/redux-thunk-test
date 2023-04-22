import { createSlice } from "@reduxjs/toolkit";
export type UsersType={
    id: string,
    name: string,
}

const initialState: UsersType[] = [
    {id: '1', name:'Onadebi U.'},
    {id: '2', name:'Maximillian K.'}
]



const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        getAllUsers:(state)=>{
            return state;
        }
    }
});


export const UserSliceReducer = UserSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name: 'counter',
    initialState:{
        count: 0
    },
    reducers:{
        increment: (state)=> {
            state.count += 1;
        },
        decrement: (state)=> {
            state.count -= 1;
        },
        reset: (state)=>{
            state.count = 0;
        },
        incrementBy: (state, action: PayloadAction<{value: number}>)=>{
            state.count += action.payload.value
        }
    }
});
// export const {increment} = CounterSlice.actions;
export default CounterSlice;
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../store/RootReducer';
import CounterSlice from '../../store/features/counter/Counter.slice';

const Counter = () => {
    const count = useSelector((state: RootState)=> state.counter.count);
    const dispatch = useDispatch();

  return (
    <>
        <div style={{textAlign:'center', fontSize:'48px'}}>
            <div>{count}</div>
            <div><button onClick={(e)=> dispatch(CounterSlice.actions.increment())}>Increase</button></div>
            <div><button onClick={(e)=> dispatch(CounterSlice.actions.decrement())}>Decrease</button></div>
            <div><button onClick={(e)=> dispatch(CounterSlice.actions.reset())}>Reset</button></div>
            
        </div>
    </>
  )
}

export default Counter
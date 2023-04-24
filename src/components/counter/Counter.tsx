import React from 'react';
import CounterSlice from '../../store/features/counter/Counter.slice';
import { useAppDispatch, useAppSelector } from '../../store/store';

const Counter = () => {
    const count = useAppSelector((state)=> state.counter.count);
    const dispatch = useAppDispatch();

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
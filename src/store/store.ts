import {configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import RootReducer from './RootReducer';


const store = configureStore({
    reducer: RootReducer
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof RootReducer>;
// #region Custom hook
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
//#endregion
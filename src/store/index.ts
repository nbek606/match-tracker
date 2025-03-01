import {configureStore} from "@reduxjs/toolkit";
import {rootReducer, RootState} from "@/store/reducer.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const setupStore = configureStore({
    reducer: rootReducer
})

export type AppStore = typeof setupStore
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
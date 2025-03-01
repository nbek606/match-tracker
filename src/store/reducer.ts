import {combineReducers} from "@reduxjs/toolkit";
import {matchTrackerReducer} from "@/modules/match-tracker/model";

export const rootReducer = combineReducers({
    matchTracker: matchTrackerReducer
})

export type RootState = ReturnType<typeof rootReducer>
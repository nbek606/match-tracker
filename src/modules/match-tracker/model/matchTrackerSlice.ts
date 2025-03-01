import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchMatchTrackerApi} from "./matchTrackerApi.ts";
import {IMatch, IMatchTracker} from "./matchTrackerTypes.ts";

interface IInitialState {
    isLoading: boolean,
    error: string,
    listMatch: IMatch[]
}

const initialState: IInitialState = {
    isLoading: false,
    error: '',
    listMatch: []
}

export const matchTrackerSlice = createSlice({
    name: "productSlice",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMatchTrackerApi.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchMatchTrackerApi.fulfilled, (state, action: PayloadAction<IMatchTracker>) => {
                state.isLoading = false
                state.listMatch = action.payload.matches
                state.error = ''
            })
            .addCase(fetchMatchTrackerApi.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка: не удалось загрузить информацию'
            })
    }
})

export const matchTrackerReducer = matchTrackerSlice.reducer;

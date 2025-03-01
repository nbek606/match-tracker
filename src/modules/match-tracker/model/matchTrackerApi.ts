import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "@/shared/api/axiosIntance.ts";

export const fetchMatchTrackerApi = createAsyncThunk(
    'fetchMatchTrackerApi',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get('/fronttemp')
            return response.data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
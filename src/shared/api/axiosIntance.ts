import {baseUrl} from "@/shared/config/api";
import axios from 'axios';
export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});
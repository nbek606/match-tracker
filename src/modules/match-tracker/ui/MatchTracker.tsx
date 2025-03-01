import './MatchTracker.scss';
import {MatchTrackerHeader} from "./MatchTrackerHeader.tsx";
import {MatchTrackerList} from "./MatchTrackerList.tsx";
import {useEffect} from "react";
import {fetchMatchTrackerApi} from "../model/matchTrackerApi.ts";
import {useAppDispatch, useAppSelector} from "@/store";
import {CircularProgress} from "@mui/material";

export const MatchTracker = () => {
    const dispatch = useAppDispatch()
    const { listMatch, isLoading, error } = useAppSelector(state => state.matchTracker)

    useEffect(() => {
        if (listMatch.length === 0) {
            dispatch(fetchMatchTrackerApi())
        }
    }, [listMatch, dispatch]);

    return (
        <div className="match__tracker">
            <MatchTrackerHeader
                isLoading={isLoading}
                error={error}
                onApiCall={() => dispatch(fetchMatchTrackerApi())}
            />
            {
                !isLoading ?
                    <MatchTrackerList
                        list={listMatch}
                    />
                : <div className="match__tracker-loader" >
                        <CircularProgress disableShrink />
                  </div>
            }
        </div>
    )
}

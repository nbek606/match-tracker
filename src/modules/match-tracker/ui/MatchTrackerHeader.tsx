//!!!!!! Использовал для тайтл Inter так как Tactic Sans платный

import {Button} from "@mui/material";
import RefreshIcon from "@/shared/svg/refresh.svg";
import ErrorIcon from "@/shared/svg/error.svg";
import {FC} from "react";

interface IMatchTrackerHeaderProps {
    error: string,
    isLoading: boolean,
    onApiCall?: () => void
}

export const MatchTrackerHeader: FC<IMatchTrackerHeaderProps> = ({ error, onApiCall }) => {
    return (
        <div className="match__tracker-header">
            <h2 className="match__tracker-header__title">
                Match Tracker
            </h2>
            <div className="match__tracker-header__refresh">
                {
                    error &&
                    <div className="match__tracker-header__error">
                        <img src={ErrorIcon} alt="error" />
                        <span>{error}</span>
                    </div>
                }
                <Button
                    className="match__tracker-header__batton"
                    endIcon={<img src={RefreshIcon} alt="refresh" />}
                    onClick={onApiCall}
                >
                    Обновить
                </Button>
            </div>
        </div>
    )
}
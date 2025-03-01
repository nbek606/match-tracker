import {FC} from "react";
import {MatchStatus} from "../model/matchTrackerTypes.ts";
import CommandIcon from "@/shared/svg/command.svg";

interface IMatchTrackerListItemProps {
    awayPlace: number,
    homePlace: number,
    homeScore: number,
    awayScore: number,
    status: MatchStatus
}


export const MatchTrackerCard: FC<IMatchTrackerListItemProps> = ({ awayPlace, homePlace, awayScore, homeScore, status }) => {
    return (
        <div className="match__tracker-card">
            <div className="match__tracker-card__first">
                <img src={CommandIcon} alt={awayPlace.toString()}/>
                <span>Command №{homePlace}</span>
            </div>
            <div className="match__tracker-card__content">
                <div className="match__tracker-card__content-score">
                    <span>{homeScore}</span>
                    <span>:</span>
                    <span>{awayScore}</span>
                </div>
                <div
                    className={
                        `match__tracker-card__content-status 
                        ${status === 'Ongoing' && 'bg-orange'}
                        ${status === 'Finished' && 'bg-red'}
                        `
                    }
                >
                    {status}
                </div>
            </div>
            <div className="match__tracker-card__second">
                <span>Command №{awayPlace}</span>
                <img src={CommandIcon} alt={awayPlace.toString()}/>
            </div>
        </div>
    )
}
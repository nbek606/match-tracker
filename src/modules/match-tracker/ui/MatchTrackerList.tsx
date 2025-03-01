import {IMatch} from "@/modules/match-tracker/model";
import {MatchTrackerCard} from "./MatchTrackerCard.tsx";
import {FC} from "react";

interface IMatchTrackerContentProps {
    list: IMatch[]
}

export const MatchTrackerList: FC<IMatchTrackerContentProps> = ({ list }) => {
    return (
        <div className="match__tracker-content">
            {
               //данные без id, указываем key=index
               list.map((item, index) =>
                   <MatchTrackerCard
                       key={index}
                       awayPlace={item.awayTeam.place}
                       homePlace={item.homeTeam.place}
                       awayScore={item.awayScore}
                       homeScore={item.homeScore}
                       status={item.status}
                   />
               )
            }
        </div>
    )
}
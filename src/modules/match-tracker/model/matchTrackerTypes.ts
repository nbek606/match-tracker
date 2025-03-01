export interface IMatchTracker {
    matches: IMatch[]
}

export interface IMatch {
    time: string,
    title: string,
    homeTeam: ITeam,
    awayTeam: ITeam,
    homeScore: number,
    awayScore: number,
    status: MatchStatus
}

export interface ITeam {
   name: string,
   players: IPlayer,
   points: number,
   place: number,
   total__kills: number
}

export interface IPlayer {
    username: string,
    kills: number,
}

export type MatchStatus = 'Scheduled' | 'Ongoing' | 'Finished'


type HomeTeamCardTemplate = {
  id: number;
  teamName: string;
  goals: {
    halftime: {
      home: number;
      away: number;
    },
    fulltime: {
      home: number;
      away: number;
    },
    extratime: {
      home: number;
      away: number;
    },
    penalty: {
      home: number;
      away: number;
    }
  },
  totalGoals: {
    home: number;
    away: number;
  };
  winner: boolean;
}

export const HomeTeamCardTemplate = ({ teamName, id, winner, totalGoals }: HomeTeamCardTemplate) => {
  return (
    <div key={id} className={`flex gap-2 ${winner ? 'text-slate-600' : 'text-slate-400'}`}>
      <div>
        {totalGoals.home}
      </div>

      <div>
        {teamName}
      </div>
    </div>
  )
}
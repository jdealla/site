import { getAllPlayersWithAllStats } from "../../lib/players";

export default async (req, res) => {
    const { query } = req;

    console.log(query);
    
    let players = [];
    players = await getAllPlayersWithAllStats();

    if (query?.overall) {
        const tier = query.overall.split("-");
        const tierStart = tier[0];
        const tierEnd = tier[1];

        players = players.filter(player => (player?.info?.overall >= tierStart) && (player?.info?.overall <= tierEnd)) 
    }

    if (query?.searchValue) {
        players = players.filter(player => player?.info?.name.toLowerCase().includes(query.searchValue));
    }

    res.status(200).json(players);
}
import allPlayers from "../data/players.csv";

export function getPlayersData() {
    return allPlayers
}

export function getPlayersIds() {
    return allPlayers.map(player => {
        return {
            params: {
                id: player.id.toString()
            }
        }
    })
}

export function getPlayerData(id) {
    return allPlayers.find(player => player.id == id)
}
import allPlayers from "../data/players.csv";

const playersPerPage = 20;

export function getPlayersData() {
    return allPlayers;
}

export function getPlayersIds() {
    return allPlayers.map(player => {
        return {
            params: {
                id: player.id.toString()
            }
        }
    });
}

export function getPlayerData(id) {
    return allPlayers.find(player => player.id == id);
}

export function getPlayersByPage(page) {
    let endIndex = page * playersPerPage;
    let startIndex = endIndex - playersPerPage;

    return allPlayers.slice(startIndex, endIndex);
}
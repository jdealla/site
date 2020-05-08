import allPlayers from "../data/players.csv";

const playersPerPage = 20;

export const playerEnum = {
    STATS: {
        STARTINDEX: 17,
        ENDINDEX: 57,
    },
    TENDENCIES: {
        STARTINDEX: 58,
        ENDINDEX: 146,
    },
    BADGES: {
        STARTINDEX: 147,
        ENDINDEX: allPlayers.length - 1
    },
}

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

export function getPlayerHeight(height) {
    let heightString = "";
    let feet = height / 12;

    if (Number.isInteger(feet)) return `${feet}'`;

    heightString += parseInt(feet).toString();
    let feetInches = parseInt(feet) * 12;
    let inches = height - feetInches;

    heightString += `'${inches}"`

    return heightString;
}

export function getPropNames(type) {
    const allKeys = Object.keys(allPlayers[0]);

    const formatKey = (key) => {
        let name = key.split("_");

        if (name[name.length - 1] === "t")
            name[name.length - 1] = "";

        return name.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
    }

    switch(type) {
        case "stats": 
            return allKeys.slice(playerEnum.STATS.STARTINDEX, playerEnum.STATS.ENDINDEX).map(key => formatKey(key))
        case "tendencies":
            return allKeys.slice(playerEnum.TENDENCIES.STARTINDEX, playerEnum.TENDENCIES.ENDINDEX).map(key => formatKey(key))
        case "badges":
            return allKeys.slice(playerEnum.BADGES.STARTINDEX, playerEnum.BADGES.ENDINDEX).map(key => formatKey(key))
    }
}

export function getPlayerBySuggestion(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : allPlayers.filter(player => {
        let name = player.name.toLowerCase().split(" ");
        return (
            name[0].slice(0, inputLength) === inputValue || 
            name[1].slice(0, inputLength) === inputValue
        )
    });
}

export function getPlayerStats(id) {
    return getPlayerData(id).slice(playerEnum.STATS.STARTINDEX, playerData.STATS.STARTINDEX);
}

export function getPlayerTendencies(id) {
    return getPlayerData(id).slice(playerEnum.TENDENCIES.STARTINDEX, playerData.TENDENCIES.STARTINDEX);
}

export function getPlayerBadges(id) {
    return getPlayerData(id).slice(playerEnum.BADGES.STARTINDEX, playerEnum.BADGES.ENDINDEX);
}

export function sortBy(key) {

}

export function filterByKey(key) {
    
}
import allPlayers from "../data/players.csv";
import { playerEnum } from "./playerEnum";

const playersPerPage = 20;

export function getPlayersData() {
    return allPlayers;
}

export function getAllPlayersData() {
    return allPlayers.map(player => getPlayerData(player.id));
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

export function findPlayer(id) {
    return allPlayers.find(player => player.id == id);
}

export function getPlayerData(id) {
    const playerInfo = getPlayerInfo(id, playerEnum.INFO.START, playerEnum.INFO.END);
    const playerHotZones = getPlayerInfo(id, playerEnum.HOTZONES.START, playerEnum.HOTZONES.END);

    const shootingStats = getPlayerInfo(id, playerEnum.STATS.SHOOTING.START, playerEnum.STATS.SHOOTING.END);
    const insideScoringStats = getPlayerInfo(id, playerEnum.STATS.INSIDE.START, playerEnum.STATS.INSIDE.END);
    const atheleticismStats = getPlayerInfo(id, playerEnum.STATS.ATHLETICISM.START, playerEnum.STATS.ATHLETICISM.END);
    const playmakingStats = getPlayerInfo(id, playerEnum.STATS.PLAYMAKING.START, playerEnum.STATS.PLAYMAKING.END);
    const defenseStats = getPlayerInfo(id, playerEnum.STATS.DEFENSE.START, playerEnum.STATS.DEFENSE.END);
    const reboundStats = getPlayerInfo(id, playerEnum.STATS.REBOUND.START, playerEnum.STATS.REBOUND.END);
    const potentialStats = getPlayerInfo(id, playerEnum.STATS.POTENTIAL.START, playerEnum.STATS.POTENTIAL.END);

    const finishingBadges = sortBadges(getPlayerInfo(id, playerEnum.BADGES.FINISHING.START, playerEnum.BADGES.FINISHING.END));
    const shootingBadges = sortBadges(getPlayerInfo(id, playerEnum.BADGES.SHOOTING.START, playerEnum.BADGES.SHOOTING.END));
    const playmakingBadges = sortBadges(getPlayerInfo(id, playerEnum.BADGES.PLAYMAKING.START, playerEnum.BADGES.PLAYMAKING.END));
    const defensiveBadges = sortBadges(getPlayerInfo(id, playerEnum.BADGES.DEFENSE.START, playerEnum.BADGES.DEFENSE.END));
    const personalityBadges = sortBadges(getPlayerInfo(id, playerEnum.BADGES.PERSONALITY.START, playerEnum.BADGES.PERSONALITY.END));
    const totalBadges = getTotalBadges(finishingBadges, shootingBadges, playmakingBadges, defensiveBadges);

    const insideT = getPlayerInfo(id, playerEnum.TENDENCIES.INSIDE.START, playerEnum.TENDENCIES.INSIDE.END);
    const shootingT = getPlayerInfo(id, playerEnum.TENDENCIES.SHOOTING.START, playerEnum.TENDENCIES.SHOOTING.END);
    const isoT = getPlayerInfo(id, playerEnum.TENDENCIES.ISO.START, playerEnum.TENDENCIES.ISO.END);
    const driveT = getPlayerInfo(id, playerEnum.TENDENCIES.DRIVE.START, playerEnum.TENDENCIES.DRIVE.END);
    const freelanceT = getPlayerInfo(id, playerEnum.TENDENCIES.FREELANCE.START, playerEnum.TENDENCIES.FREELANCE.END);
    const postT = getPlayerInfo(id, playerEnum.TENDENCIES.POST.START, playerEnum.TENDENCIES.POST.END);
    const passingT = getPlayerInfo(id, playerEnum.TENDENCIES.PASSING.START, playerEnum.TENDENCIES.PASSING.END);
    const defenseT = getPlayerInfo(id, playerEnum.TENDENCIES.DEFENSE.START, playerEnum.TENDENCIES.DEFENSE.END);

    const shootingA = getPlayerInfo(id, playerEnum.SIGS.SHOOTING.START, playerEnum.SIGS.SHOOTING.END);
    const handleA = getPlayerInfo(id, playerEnum.SIGS.BALLHANDLE.START, playerEnum.SIGS.BALLHANDLE.END); 
    const postA = getPlayerInfo(id, playerEnum.SIGS.POST.START, playerEnum.SIGS.POST.END);
    const layupA = getPlayerInfo(id, playerEnum.SIGS.LAYUP.START, playerEnum.SIGS.LAYUP.END);

    const hands = getPlayerInfo(id, playerEnum.SIGS.HANDS.START, playerEnum.SIGS.HANDS.END);
    const dateAdded = getPlayerInfo(id, playerEnum.DATEADDED, playerEnum.DATEADDED + 1);
    return {
        info: playerInfo,
        hotzones: playerHotZones,
        image: `/players/${playerInfo.name.replace(/ /g, "_").toLowerCase()}_${playerInfo.id}.jpg`,
        stats: {
             shooting: shootingStats,
             inside: insideScoringStats,
             atheleticism: atheleticismStats,
             playmaking: playmakingStats,
             defense: defenseStats,
             rebound: reboundStats,
             potential: potentialStats
        },
        badges: {
            finishing: finishingBadges,
            shooting: shootingBadges,
            playmaking: playmakingBadges,
            defensive: defensiveBadges,
            personality: personalityBadges,
            totalBadges: totalBadges
        },
        tendencies: {
            inside: insideT,
            shooting: shootingT,
            iso: isoT,
            drive: driveT,
            freelance: freelanceT,
            post: postT,
            passing: passingT,
            defense: defenseT
        },
        animations: {
            shooting: shootingA,
            ballhandle: handleA,
            post: postA,
            layup: layupA,
            hands: hands
        },
        dateAdded: dateAdded
    }
}

export function getPlayersByPage(page) {
    let endIndex = page * playersPerPage;
    let startIndex = endIndex - playersPerPage;

    return allPlayers.slice(startIndex, endIndex).map(player => getPlayerData(player.id))
}

export function formatName(statName) {
    let name = statName.split("_");

    if (name.length === 1)
        return name[0].charAt(0).toUpperCase() + name[0].substring(1);
    
    if (name[name.length - 1] === "t" || name[name.length - 1] === "a")
        name[name.length - 1] = "";
    
    if (name[name.length - 1] === "iq")
        name[name.length - 1] = "IQ";

    return name.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
}

export function getPropNames(type) {
    const allKeys = Object.keys(allPlayers[0]);

    switch(type) {
        case "stats": 
            return allKeys.slice(playerEnum.STATS.START, playerEnum.STATS.END).map(key => formatName(key));
        case "tendencies":
            return allKeys.slice(playerEnum.TENDENCIES.START, playerEnum.TENDENCIES.END).map(key => formatName(key));
        case "badges":
            return allKeys.slice(playerEnum.BADGES.START, playerEnum.BADGES.END).map(key => formatName(key));
        case "sigs":
            return allKeys.slice(playerEnum.SIGS.START, playerEnum.SIGS.END).map(key => formatName(key));
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

export function getPlayerInfo(id, start, end) {
    let playerData = findPlayer(id);

    return Object.keys(playerData).slice(start, end).reduce((result, key) => {
        result[key] = playerData[key];
        return result;
    }, {})
}

export function sortPlayersByProp(prop) {
    let sortedPlayers = allPlayers.slice(0);
    const dynamicSort = (prop) => {
        var sortOrder = 1;
        if(prop[0] === "-") {
            sortOrder = -1;
            prop = prop.substr(1);
        }
        return function (a, b) {
            var result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    return sortedPlayers.sort(dynamicSort(prop)).map(player => getPlayerData(player.id))
}

export function filterPlayersByProp(prop, value) {
    return allPlayers.filter(player => player[key] > value)
}

export function getTotalBadges(finishingBadges, shootingBadges, playmakingBadges, defensiveBadges) {
    let totalFinishing = Object.keys(finishingBadges).length;
    let totalShooting = Object.keys(shootingBadges).length;
    let totalplayMaking = Object.keys(playmakingBadges).length;
    let totalDefensive = Object.keys(defensiveBadges).length;
    let hof = 0;
    let gold = 0
    let silver = 0
    let bronze = 0;

    [finishingBadges, shootingBadges, playmakingBadges, defensiveBadges].forEach((obj) => {
        Object.values(obj).forEach((level) => {
            switch(level) {
                case "HOF": hof++; break;
                case "Gold": gold++; break;
                case "Silver": silver++; break;
                case "Bronze": bronze++; break;
            }
        })
    })

    return {
        finishing: totalFinishing,
        shooting: totalShooting,
        playmaking: totalplayMaking,
        defensive: totalDefensive,
        hofBadges: hof,
        goldBadges: gold,
        silverBadges: silver,
        bronzeBadges: bronze
    }
}

export function levelToNum(level) {
    switch(level) {
        case 'HOF': return 4;
        case 'Gold': return 3;
        case 'Silver': return 2;
        case 'Bronze': return 1;
        case 'Yes': return 1;
        case 'No': return 0;
        case 'None': return 0;
        default: return level;
    }
}

export function sortBadges(badges) {
    let sorted = Object.entries(badges).sort((a, b) => {
        const [aBadge, aLevel] = a;
        const [bBadge, bLevel] = b;

        const numA = levelToNum(aLevel);
        const numB = levelToNum(bLevel);

        if (numA > numB)
            return -1;
        else if (numA == numB)
            return (aBadge > bBadge) ? 1 : -1
        else if (numA < numB)
            return 1;
    }).reduce((sortedObj, key) => {
        let [name, value] = key;
            
        return { ...sortedObj, [name]: value }
    }, {})

    return sorted;
}

export function groupedPlayersByDate() {
    let groupedBy = allPlayers.reduce((h, obj) => Object.assign(h, { [obj.date]: ( h[obj.date] || [] ).concat(obj) }), {});

    return groupedBy;
}
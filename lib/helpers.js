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

export function numToLevel(num) {
    if (num === 0) return "None";
    else if (num === 1) return "Bronze";
    else if (num === 2) return "Silver";
    else if (num === 3) return "Gold";
    else if (num >= 4) return "HOF";
}

export function ratingColor(num) {
    let color = ""
    switch (true) {
        case (num < 50): color = "is-danger"; break;
        case (num < 70): color = "is-link"; break;
        case (num < 80): color = "is-warning"; break;
        case (num < 90): color = "is-info"; break;
        case (num <= 100): color = "is-success"; break;
        default: color = "is-dark";
        }

        return (
            <span className={`tag ${color} has-text-weight-semibold`}>{num} {'   '}</span>
    )
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

export function getFilterTiers(filterValues) {
    let tiers = []
    let tierStart = 0, tierEnd = 0;

    if (filterValues.includes("bronze")) {
        tierStart = 67; tierEnd = 69;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("silver")) {
        tierStart = tierStart != 0 ? tierStart : 70; tierEnd = 75;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("gold")) {
        tierStart = tierStart != 0 ? tierStart : 76; tierEnd = 79;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("emerald")) {
        tierStart = tierStart != 0 ? tierStart : 80; tierEnd = 83;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("sapphire")) {
        tierStart = tierStart != 0 ? tierStart : 84; tierEnd = 86;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("ruby")) {
        tierStart = tierStart != 0 ? tierStart : 87; tierEnd = 89;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("amethyst")) {
        tierStart = tierStart != 0 ? tierStart : 90; tierEnd = 92;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("diamond")) {
        tierStart = tierStart != 0 ? tierStart : 93; tierEnd = 95;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("pink diamond")) {
        tierStart = tierStart != 0 ? tierStart : 96; tierEnd = 98;
        tiers.push([tierStart, tierEnd])
    } if (filterValues.includes("galaxy opal")) {
        tierStart = tierStart != 0 ? tierStart : 99; tierEnd = 99
        tiers.push([tierStart, tierEnd])
    } 

    return tiers;
}
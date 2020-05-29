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
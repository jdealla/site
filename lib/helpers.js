export function levelToNum(level) {
    switch(level.toLowerCase()) {
        case 'hof': return 4;
        case 'gold': return 3;
        case 'silver': return 2;
        case 'bronze': return 1;
        case 'yes': return 1;
        case 'no': return 0;
        case 'none': return 0;
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

export function ratingColor(num, tendency=false) {
    let color = ""
    switch (true) {
        case (num < 50): color = "is-danger"; break;
        case (num < 70): color = "is-link"; break;
        case (num < 80): color = "is-warning"; break;
        case (num < 90): color = "is-info"; break;
        case (num <= 100): color = "is-success"; break;
        case (num > 100): color = "is-success"; break;
        default: color = "is-dark";
    }

    if (tendency) {
        return <span className={`tag ${color} has-text-weight-semibold`}>{num} {'   '}</span>
    } else {
        return <span className={`tag ${color} has-text-weight-semibold`}>{num > 99 ? 99 : num} {'   '}</span>
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

export function getTotalNumOfBadges(player) {
    let totalCount = { bronze: 0, silver: 0, gold: 0, hof: 0 }
    let badges = [
        player.acrobat, player.backdown_punisher, player.consistent_finisher, player.contact_finisher, player.cross_key_scorer, player.deep_hooks, player.dropstepper, 
        player.fancy_footwork, player.fastbreak_finisher, player.giant_slayer, player.lob_city_finisher, player.pick_and_roller, player.pro_touch, player.putback_boss, 
        player.relentless_finisher, player.showtime, player.slithery_finisher, player.tear_dropper, player.catch_and_shoot, player.clutch_shooter, player.corner_specialist, 
        player.deadeye, player.deep_fades, player.difficult_shots,player.flexible_release, player.green_machine, player.hot_start, player.hot_zone_hunter, player.ice_in_veins, 
        player.pick_and_popper, player.pump_fake_maestro, player.quick_draw, player.range_extender, player.slippery_off_ball, player.steady_shooter, player.tireless_shooter, 
        player.volume_shooter, player.ankle_breaker, player.bail_out, player.break_starter, player.dimer, player.downhill, player.dream_shake, player.flashy_passer,
        player.floor_general, player.handles_for_days, player.lob_city_passer, player.needle_threader, player.pass_fake_maestro, player.post_spin_technician, 
        player.quick_first_step, player.space_creator, player.stop_and_go, player.tight_handles, player.unpluckable,
        player.box, player.brick_wall, player.chase_down_artist, player.clamps, player.defensive_leader, player.heart_crusher, player.interceptor, player.intimidator, 
        player.lightning_reflexes, player.moving_truck, player.off_ball_pest, player.pick_dodger, player.pick_pocket, player.pogo_stick, player.post_move_lockdown,
        player.rebound_chaser, player.rim_protector, player.tireless_defender, player.trapper, player.worm, 
    ]

    badges.forEach(badge => {
        switch(badge) {
            case "HOF": totalCount.hof++; break;
            case "Gold": totalCount.gold++; break;
            case "Silver": totalCount.silver++; break;
            case "Bronze": totalCount.bronze++; break;
        }
    })

    return totalCount;
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

export function getTotalUpgradedBadges(player, duo, duoOn, evos, evoLevel) {
    const { finishing, shooting, playmaking, defensive } = player.badges;
    let upgraded = { bronze: 0, silver: 0, gold: 0, hof: 0 }

    const upgradeConditions = (badge, level, cat) => {
        let numLevel = levelToNum(level);
        if (duoOn && evoLevel !== -1) {
            numLevel = numLevel + evos[evoLevel].badges[cat][badge] + duo.badges[cat][badge]
        } else if (duoOn && evoLevel === -1) {
            numLevel += duo.badges[cat][badge];
        } else if (!duoOn && evoLevel !== -1) {
            numLevel += evos[evoLevel].badges[cat][badge];
        }
        
        switch(numLevel) {
            case 0: break;
            case 1: upgraded.bronze++; break;
            case 2: upgraded.silver++; break;
            case 3: upgraded.gold++; break;
            default: upgraded.hof++; break;
        }
    }

    for(let [badge, level] of Object.entries(finishing)) {
        upgradeConditions(badge, level, "finishing");
    }

    for(let [badge, level] of Object.entries(shooting)) {
        upgradeConditions(badge, level, "shooting");
    }

    for(let [badge, level] of Object.entries(playmaking)) {
        upgradeConditions(badge, level, "playmaking");
    }

    for(let [badge, level] of Object.entries(defensive)) {
        upgradeConditions(badge, level, "defensive");
    }

    if (evoLevel !== -1 || duoOn) 
        return upgraded;

    return { 
        bronze: player.badges.totalBadges.bronzeBadges, silver: player.badges.totalBadges.silverBadges, 
        gold: player.badges.totalBadges.goldBadges, hof: player.badges.totalBadges.hofBadges 
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
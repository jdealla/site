const ratings = {
    PG: {
        "shooting": {
            "shot_close": {
                "value": 2
            },
            "shot_mid": {
                "value": 4
            },
            "shot_3pt": {
                "value": 4
            },
            "shot_iq": {
                "value": 0
            },
            "free_throw": {
                "value": 4
            },
            "offensive_consistency": {
                "value": 1
            }
        },
        "inside": {
            "driving_layup": {
                "value": 4
            },
            "standing_dunk": {
                "value": 0
            },
            "driving_dunk": {
                "value": 2
            },
            "draw_foul": {
                "value": 3
            },
            "post_moves": {
                "value": 0
            },
            "post_hook": {
                "value": 0
            },
            "post_fade": {
                "value": 1
            },
            "hands": {
                "value": 0
            }
        },
        "athleticism": {
            "speed": {
                "value": 5
            },
            "acceleration": {
                "value": 4
            },
            "vertical": {
                "value": 2
            },
            "strength": {
                "value": 1
            },
            "stamina": {
                "value": 0
            },
            "hustle": {
                "value": 0
            },
            "overall_durability": {
                "value": 0
            }
        },
        "playmaking": {
            "speed_with_ball": {
                "value": 5
            },
            "ball_handle": {
                "value": 5
            },
            "passing_accuracy": {
                "value": 5
            },
            "passing_vision": {
                "value": 0
            },
            "passing_iq": {
                "value": 2
            }
        },
        "defense": {
            "interior_defense": {
                "value": 1
            },
            "perimeter_defense": {
                "value": 5
            },
            "help_defense_iq": {
                "value": 0
            },
            "pick_roll_defense_iq": {
                "value": 0
            },
            "lateral_quickness": {
                "value": 5
            },
            "pass_perception": {
                "value": 0
            },
            "reaction_time": {
                "value": 0
            },
            "steal": {
                "value": 3
            },
            "block": {
                "value": 0
            },
            "shot_contest": {
                "value": 0
            },
            "defensive_consistency": {
                "value": 3
            }
        },
        "rebound": {
            "offensive_rebound": {
                "value": .5
            },
            "defensive_rebound": {
                "value": .5
            }
        }
    },
    SG: {
        "shooting": {
            "shot_close": {
                "value": 2
            },
            "shot_mid": {
                "value": 4
            },
            "shot_3pt": {
                "value": 5
            },
            "shot_iq": {
                "value": 0
            },
            "free_throw": {
                "value": 4
            },
            "offensive_consistency": {
                "value": 1
            }
        },
        "inside": {
            "driving_layup": {
                "value": 3
            },
            "standing_dunk": {
                "value": 0
            },
            "driving_dunk": {
                "value": 3
            },
            "draw_foul": {
                "value": 3
            },
            "post_moves": {
                "value": 0
            },
            "post_hook": {
                "value": 0
            },
            "post_fade": {
                "value": 1
            },
            "hands": {
                "value": 0
            }
        },
        "athleticism": {
            "speed": {
                "value": 4
            },
            "acceleration": {
                "value": 3
            },
            "vertical": {
                "value": 2
            },
            "strength": {
                "value": 1
            },
            "stamina": {
                "value": 0
            },
            "hustle": {
                "value": 0
            },
            "overall_durability": {
                "value": 0
            }
        },
        "playmaking": {
            "speed_with_ball": {
                "value": 3
            },
            "ball_handle": {
                "value": 2
            },
            "passing_accuracy": {
                "value": 2
            },
            "passing_vision": {
                "value": 0
            },
            "passing_iq": {
                "value": 0
            }
        },
        "defense": {
            "interior_defense": {
                "value": 1
            },
            "perimeter_defense": {
                "value": 5
            },
            "help_defense_iq": {
                "value": 0
            },
            "pick_roll_defense_iq": {
                "value": 0
            },
            "lateral_quickness": {
                "value": 5
            },
            "pass_perception": {
                "value": 0
            },
            "reaction_time": {
                "value": 0
            },
            "steal": {
                "value": 3
            },
            "block": {
                "value": 0
            },
            "shot_contest": {
                "value": 0
            },
            "defensive_consistency": {
                "value": 4
            }
        },
        "rebound": {
            "offensive_rebound": {
                "value": .75
            },
            "defensive_rebound": {
                "value": .75
            }
        }
    },
    SF: {
        "shooting": {
            "shot_close": {
                "value": 3
            },
            "shot_mid": {
                "value": 4
            },
            "shot_3pt": {
                "value": 4
            },
            "shot_iq": {
                "value": 0
            },
            "free_throw": {
                "value": 4
            },
            "offensive_consistency": {
                "value": 1
            }
        },
        "inside": {
            "driving_layup": {
                "value": 3
            },
            "standing_dunk": {
                "value": 0
            },
            "driving_dunk": {
                "value": 5
            },
            "draw_foul": {
                "value": 4
            },
            "post_moves": {
                "value": 3
            },
            "post_hook": {
                "value": 1
            },
            "post_fade": {
                "value": 3
            },
            "hands": {
                "value": 0
            }
        },
        "athleticism": {
            "speed": {
                "value": 4
            },
            "acceleration": {
                "value": 3
            },
            "vertical": {
                "value": 3
            },
            "strength": {
                "value": 3
            },
            "stamina": {
                "value": 0
            },
            "hustle": {
                "value": 0
            },
            "overall_durability": {
                "value": 0
            }
        },
        "playmaking": {
            "speed_with_ball": {
                "value": 4
            },
            "ball_handle": {
                "value": 2
            },
            "passing_accuracy": {
                "value": 2
            },
            "passing_vision": {
                "value": 0
            },
            "passing_iq": {
                "value": 0
            }
        },
        "defense": {
            "interior_defense": {
                "value": 2
            },
            "perimeter_defense": {
                "value": 4
            },
            "help_defense_iq": {
                "value": 1
            },
            "pick_roll_defense_iq": {
                "value": 0
            },
            "lateral_quickness": {
                "value": 4
            },
            "pass_perception": {
                "value": 0
            },
            "reaction_time": {
                "value": 0
            },
            "steal": {
                "value": 3
            },
            "block": {
                "value": 1
            },
            "shot_contest": {
                "value": 0
            },
            "defensive_consistency": {
                "value": 3
            }
        },
        "rebound": {
            "offensive_rebound": {
                "value": 1
            },
            "defensive_rebound": {
                "value": 1
            }
        }
    },
    PF: {
        "shooting": {
            "shot_close": {
                "value": 4
            },
            "shot_mid": {
                "value": 3
            },
            "shot_3pt": {
                "value": 3
            },
            "shot_iq": {
                "value": 0
            },
            "free_throw": {
                "value": 3
            },
            "offensive_consistency": {
                "value": .75
            }
        },
        "inside": {
            "driving_layup": {
                "value": 2
            },
            "standing_dunk": {
                "value": 3
            },
            "driving_dunk": {
                "value": 3
            },
            "draw_foul": {
                "value": 4
            },
            "post_moves": {
                "value": 4
            },
            "post_hook": {
                "value": 2
            },
            "post_fade": {
                "value": 4
            },
            "hands": {
                "value": 0
            }
        },
        "athleticism": {
            "speed": {
                "value": 3
            },
            "acceleration": {
                "value": 2
            },
            "vertical": {
                "value": 4
            },
            "strength": {
                "value": 4
            },
            "stamina": {
                "value": 0
            },
            "hustle": {
                "value": 0
            },
            "overall_durability": {
                "value": 0
            }
        },
        "playmaking": {
            "speed_with_ball": {
                "value": 2
            },
            "ball_handle": {
                "value": 1
            },
            "passing_accuracy": {
                "value": 1
            },
            "passing_vision": {
                "value": 0
            },
            "passing_iq": {
                "value": 0
            }
        },
        "defense": {
            "interior_defense": {
                "value": 4
            },
            "perimeter_defense": {
                "value": 3
            },
            "help_defense_iq": {
                "value": 3
            },
            "pick_roll_defense_iq": {
                "value": 0
            },
            "lateral_quickness": {
                "value": 3
            },
            "pass_perception": {
                "value": 0
            },
            "reaction_time": {
                "value": 0
            },
            "steal": {
                "value": 1
            },
            "block": {
                "value": 3
            },
            "shot_contest": {
                "value": 0
            },
            "defensive_consistency": {
                "value": 4
            }
        },
        "rebound": {
            "offensive_rebound": {
                "value": 4
            },
            "defensive_rebound": {
                "value": 4
            }
        }
    },
    C: {
        "shooting": {
            "shot_close": {
                "value": 5
            },
            "shot_mid": {
                "value": 1
            },
            "shot_3pt": {
                "value": 0
            },
            "shot_iq": {
                "value": 0
            },
            "free_throw": {
                "value": 2
            },
            "offensive_consistency": {
                "value": .25
            }
        },
        "inside": {
            "driving_layup": {
                "value": 2
            },
            "standing_dunk": {
                "value": 5
            },
            "driving_dunk": {
                "value": 3
            },
            "draw_foul": {
                "value": 4
            },
            "post_moves": {
                "value": 5
            },
            "post_hook": {
                "value": 5
            },
            "post_fade": {
                "value": 5
            },
            "hands": {
                "value": 0
            }
        },
        "athleticism": {
            "speed": {
                "value": 3
            },
            "acceleration": {
                "value": 3
            },
            "vertical": {
                "value": 4
            },
            "strength": {
                "value": 5
            },
            "stamina": {
                "value": 1
            },
            "hustle": {
                "value": 0
            },
            "overall_durability": {
                "value": 0
            }
        },
        "playmaking": {
            "speed_with_ball": {
                "value": 1
            },
            "ball_handle": {
                "value": 1
            },
            "passing_accuracy": {
                "value": 0
            },
            "passing_vision": {
                "value": 0
            },
            "passing_iq": {
                "value": 0
            }
        },
        "defense": {
            "interior_defense": {
                "value": 5
            },
            "perimeter_defense": {
                "value": 2
            },
            "help_defense_iq": {
                "value": 4
            },
            "pick_roll_defense_iq": {
                "value": 0
            },
            "lateral_quickness": {
                "value": 3
            },
            "pass_perception": {
                "value": 0
            },
            "reaction_time": {
                "value": 0
            },
            "steal": {
                "value": 3
            },
            "block": {
                "value": 5
            },
            "shot_contest": {
                "value": 0
            },
            "defensive_consistency": {
                "value": 4
            }
        },
        "rebound": {
            "offensive_rebound": {
                "value": 5
            },
            "defensive_rebound": {
                "value": 5
            }
        }
    },
    SC: {
        "shooting": {
            "shot_close": {
                "value": 5
            },
            "shot_mid": {
                "value": 3
            },
            "shot_3pt": {
                "value": 3
            },
            "shot_iq": {
                "value": 0
            },
            "free_throw": {
                "value": 3
            },
            "offensive_consistency": {
                "value": .5
            }
        },
        "inside": {
            "driving_layup": {
                "value": 2
            },
            "standing_dunk": {
                "value": 5
            },
            "driving_dunk": {
                "value": 3
            },
            "draw_foul": {
                "value": 3
            },
            "post_moves": {
                "value": 5
            },
            "post_hook": {
                "value": 5
            },
            "post_fade": {
                "value": 5
            },
            "hands": {
                "value": 0
            }
        },
        "athleticism": {
            "speed": {
                "value": 3
            },
            "acceleration": {
                "value": 3
            },
            "vertical": {
                "value": 4
            },
            "strength": {
                "value": 5
            },
            "stamina": {
                "value": 2
            },
            "hustle": {
                "value": 0
            },
            "overall_durability": {
                "value": 0
            }
        },
        "playmaking": {
            "speed_with_ball": {
                "value": 2
            },
            "ball_handle": {
                "value": 1
            },
            "passing_accuracy": {
                "value": 0
            },
            "passing_vision": {
                "value": 0
            },
            "passing_iq": {
                "value": 0
            }
        },
        "defense": {
            "interior_defense": {
                "value": 5
            },
            "perimeter_defense": {
                "value": 2
            },
            "help_defense_iq": {
                "value": 1
            },
            "pick_roll_defense_iq": {
                "value": 0
            },
            "lateral_quickness": {
                "value": 3
            },
            "pass_perception": {
                "value": 0
            },
            "reaction_time": {
                "value": 0
            },
            "steal": {
                "value": 2
            },
            "block": {
                "value": 5
            },
            "shot_contest": {
                "value": 0
            },
            "defensive_consistency": {
                "value": 4
            }
        },
        "rebound": {
            "offensive_rebound": {
                "value": 5
            },
            "defensive_rebound": {
                "value": 5
            }
        }
    },
};

const ratePosition = (stats, pos, duoOn, evoLevel, duo, evos) => {
    let totalScore = 0;
    let totalWeight = 0;
    const positionRating = ratings[pos];
    const attrKeys = Object.keys(stats);
    const sections = attrKeys.reduce((acc, key) => {
        if (key === 'potential') {
            return acc;
        }
        let sectionScore = 0;
        let sectionWeight = 0;
        const playerSectionObject = stats[key];
        const ratingsSectionObject = positionRating[key];
        const sectionKeys = Object.keys(playerSectionObject);
        sectionKeys.forEach(attrName => {
            const weight = ratingsSectionObject[attrName].value;
            let value = playerSectionObject[attrName];
            if (evoLevel > -1) {
                value += evos[evoLevel].stats[key][attrName];
            }
            if (duoOn) {
                value += duo.stats[key][attrName]
            }
            value = value > 100 ? 99 : value;
            const score = (value / 99) * weight;
            totalScore += score;
            totalWeight += weight;
            sectionScore += score;
            sectionWeight += weight;
        });
        const score = (sectionScore / (sectionWeight || 1)) * 100;
        acc[key] = parseFloat(score.toFixed(2));
        return acc;
    }, {});
    let overall = (totalScore / totalWeight) * 100;
    overall = parseFloat(overall.toFixed(2));
    return {
        sections,
        overall
    };
};

const positionString = pos => {
    switch(pos){
        case "PG": return "Point Guard"
        case "SG": return "Shooting Guard"
        case "SF": return "Small Forward"
        case "PF": return "Power Forward"
        case "SC": return "Shooting Center"
        case "C": return "Center"
    };
};

export const ratePlayer = (playerObj, duoOn, evoLevel, duo, evos) => {
    const {
        info,
        stats
    } = playerObj;
    const {
        position,
        secondary_position
    } = info;
    const positions = [ position ];
    if (secondary_position) {
      positions.push(secondary_position);
    }
    if (positions.some(pos => pos.indexOf('C') > -1)) {
        positions.push('SC');
    }
    const ratings = positions.reduce((acc, pos) => {
        const { sections, overall } = ratePosition(stats, pos, duoOn, evoLevel, duo, evos)
        acc.push({
            position: positionString(pos),
            overall,
            sections
        });
        return acc;
    }, []);
    return ratings
};
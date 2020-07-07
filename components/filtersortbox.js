import React, { useState, useEffect } from "react";
import { FaSortAmountDown, FaSortAmountUp, FaTimes } from "react-icons/fa";
import Dropdown from "./dropdown";
import SearchFilter from "./searchfilter";

export default function FilterSortBox(props) {
    const { teams, allAnimations, searchOptions, handleOptions, } = props;
    const [animationCat, setAnimationCat] = useState("lower_base_a");
    const [filterItems, setFilterItems] = useState(allAnimations.lower_base_a)

    useEffect(() => {
        setFilterItems(allAnimations[animationCat]);
    }, [animationCat])

    const handleAnimationCat = (cat) => setAnimationCat(cat);
    const handleChange = (e) => handleOptions({ ...searchOptions, searchValue: e.target.value });
    const handlePerPage = (num) => handleOptions({ ...searchOptions, perPage: num });
    const handleSortDirection = () => handleOptions({ ...searchOptions, asc: !searchOptions.asc });
    const clearOptions = () => {
        handleOptions({
            searchValue: "", filterOptions: { position: [], overall: [], badges: [], animations: [], teams: [] }, sortOptions: [], asc: false, page: 0, perPage: 15,
            evos: false, duos: false, secondary: false, exclusive: false
        });
    }

    const handleSort = (prop) => {
        const { sortOptions } = searchOptions;
        let newOptions = sortOptions;

        let targetIndex = newOptions.findIndex(option => option === prop);

        if (newOptions.includes(prop)) {
            newOptions.splice(targetIndex, 1);
        } else {
            newOptions.push(prop);
        }

        handleOptions({ ...searchOptions, page: 0, sortOptions: newOptions });
    }

    const handleFilter = (prop, value="") => {
        const { filterOptions } = searchOptions;
        let values = filterOptions[prop];

        if (filterOptions[prop].indexOf(value) === -1) {
            values.push(value);
        } else {
            values = values.filter(item => item !== value);
        }

        handleOptions({ ...searchOptions, page: 0, filterOptions: { ...filterOptions, [prop]: values } });
    }

    const handleBadgeFilter = (value) => {
        const { filterOptions } = searchOptions;
        let values = filterOptions.badges;

        if (values.length === 0)
            values.push(value + "-Bronze");
        else {
            let targetIndex = values.findIndex(badge => badge.split("-")[0] === value.toLowerCase().replace(/ /g, "_"));

            if (targetIndex === -1) {
                values.push(value + "-Bronze");
            } else {
                let level = values[targetIndex].split("-")[1];
                
                switch(level) {
                    case "Bronze": values[targetIndex] = value + "-Silver"; break;
                    case "Silver": values[targetIndex] = value + "-Gold"; break;
                    case "Gold": values[targetIndex] = value + "-HOF"; break;
                    case "HOF": values.splice(targetIndex, 1);
                }
            }
        }

        handleOptions({ ...searchOptions, page: 0, filterOptions: { ...filterOptions, badges: values } })
    }
 
    const handleAnimationFilter = (cat, value) => {
        const { filterOptions } = searchOptions;
        let animations = filterOptions.animations;
        let newFilter = cat + "-" + value;

        let targetIndex = animations.findIndex(ani => ani === newFilter);

        if (targetIndex === -1) {
            animations.push(newFilter);
        } else {
            animations.splice(targetIndex, 1);
        }

        handleOptions({ ...searchOptions, page: 0, filterOptions: { ...filterOptions, animations: animations }})
    }

    const handleTeamFilter = (team) => {
        const { filterOptions } = searchOptions;
        let teams = filterOptions.teams;

        let targetIndex = teams.findIndex(ani => ani === team);

        if (targetIndex === -1) {
            teams.push(team);
        } else {
            teams.splice(targetIndex, 1);
        }

        handleOptions({ ...searchOptions, page: 0, filterOptions: { ...filterOptions, teams: teams }})
    }

    const showAnimationFilters = () => {
        let filters = searchOptions.filterOptions.animations.map((ani, i) => {
            let [cat, value] = ani.split("-");
            return (
                <button className="button is-small" key={i} onClick={() => handleAnimationFilter(cat, value)}>
                    <span>{cat.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/A/, "")}: {value}</span>
                    <FaTimes />
                </button>
            )
        })

        return (
            <>
                <button className="button is-small" onClick={() => handleOptions({ ...searchOptions, exclusive: !searchOptions.exclusive })}>{searchOptions.exclusive ? "Exact Match" : "Include All"}</button>
                <div className="tags">
                    {filters}
                </div>
            </>
        )
    }

    const getDropdownItems = (cat) => {
        let items = [];
        switch(cat) {
            case "shootingStats": items = ["Shot Close", "Shot Mid", "Shot 3pt", "Free Throw", "Offensive Consistency"]; break;
            case "insideStats": items = ["Driving Layup", "Standing Dunk", "Driving Dunk", "Draw Foul", "Post Moves", "Post Hook", "Post Fade", "Hands"]; break;
            case "playmakingStats": items = ["Speed With Ball", "Ball Handle", "Passing Accuracy", "Passing Vision"]; break;
            case "athleticismStats": items = ["Speed", "Acceleration", "Vertical", "Strength", "Stamina", "Hustle"]; break;
            case "defenseStats": items = [
                "Interior Defense", "Perimeter Defense", "Help Defense IQ", "Lateral Quickness", "Pass Perception", "Steal", "Block", "Defensive Consistency"
            ]; break;
            case "reboundStats": items = ["Offensive Rebound", "Defensive Rebound"]; break;
            case "insideT": items = ["Standing Dunk T", "Driving Dunk T", "Flashy Dunk T", "Alley Oop T", "Putback Dunk T", "Crash T", "Driving Layup T"]; break;
            case "shootingT": items = ["Shot 3pt T", "Spot Up Shot 3pt T", "Off Screen Shot 3pt T", "Transition Pull Up 3pt T"]; break;
            case "defenseT": items = ["Pass Interception T", "Take Charge T", "On Ball Steal T", "Contest Shot T", "Block Shot T", "Foul T", "Hard Foul T"]; break;
            case "freelanceT": items = ["Roll Vs Pop T", "Transition Spot Up T"]; break;
            case "passingT": items = ["Flashy Pass T", "Alley Oop Pass T"]; break;
        }

        return items.map((stat, i) => (
            <a 
                key={i} 
                className={`dropdown-item ${searchOptions.sortOptions.includes(stat.toLowerCase().replace(/ /g, "_")) ? "is-active" : ""}`} 
                onClick={() => handleSort(stat.toLowerCase().replace(/ /g, "_"))}
            >
                {stat}
            </a>
        ));
    }

    const getBadgeItems = (cat) => {
        let items = []
        switch(cat) {
            case "finishing": items = [
                "Acrobat", "Backdown Punisher", "Consistent Finisher", "Contact Finisher", "Cross Key Scorer", "Deep Hooks", "Dropstepper", "Fancy Footwork",
                "Fastbreak Finisher", "Giant Slayer", "Lob City Finisher", "Pick And Roller", "Pro Touch", "Putback Boss", "Relentless Finisher", "Showtime",
                "Slithery Finisher", "Tear Dropper"
            ]; break;
            case "shooting": items = [
                "Catch And Shoot", "Clutch Shooter", "Corner Specialist", "Deadeye", "Deep Fades", "Difficult Shots", "Flexible Release", "Green Machine",
                "Hot Start", "Hot Zone Hunter", "Ice In Veins", "Pick And Popper", "Pump Fake Maestro", "Quick Draw", "Range Extender", "Slippery Off Ball",
                "Steady Shooter", "Tireless Shooter", "Volume Shooter"
            ]; break;
            case "playmaking": items = [
                "Ankle Breaker", "Bail Out", "Break Starter", "Dimer", "Downhill", "Dream Shake", "Flashy Passer", "Floor General", "Handles For Days", "Lob City Passer",
                "Needle Threader", "Pass Fake Maestro", "Post Spin Technician", "Quick First Step", "Space Creator", "Stop And Go", "Tight Handles", "Unpluckable"
            ]; break;
            case "defense": items = [
                "Box", "Brick Wall", "Chase Down Artist", "Clamps", "Defensive Leader", "Heart Crusher", "Interceptor", "Intimidator", "Lightning Reflexes", "Moving Truck",
                "Off Ball Pest", "Pick Pocket", "Pogo Stick", "Post Move Lockdown", "Rebound Chaser", "Rim Protector", "Tireless Defender", "Trapper", "Worm"
            ]; break;
        }

        return items.map((item, i) => {
            let formatted = item.toLowerCase().replace(/ /g, "_");
            let badge = searchOptions.filterOptions.badges.find(badge => {
                let name = badge.split("-")[0];
                return formatted === name;
            })

            let level = (badge) ? badge.split("-")[1] : "";

            return (
                <a
                    key={i}
                    className={`dropdown-item ${searchOptions.filterOptions.badges.includes(badge) ? `is-${level}` : ""}`}
                    onClick={() => handleBadgeFilter(formatted)}
                >
                    {item}
                </a>
            )
        })
    }

    const getAnimationCats = () => {
        return Object.keys(allAnimations).map((cat, i) => (
            <a className="dropdown-item" key={i} onClick={() => handleAnimationCat(cat)}>
                {cat.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/A/g, "")}
            </a>
        ))
    }

    const getTeamDropdownItems = () => {
        return teams.map(team => (
            <a key={team} className={`dropdown-item ${searchOptions.filterOptions.teams.includes(team) ? "is-active" : ""}`} onClick={() => handleTeamFilter(team)}>
                {team}
            </a>    
        ))
    }

    const getPlayerAmounts = () => {
        let amount = [15, 20, 30, 40, 50];
        return amount.map(num => (
            <a key={num} className={`dropdown-item ${searchOptions.perPage === num ? "is-active" : ""}`} onClick={() => handlePerPage(num)}>
                {num}
            </a>
        ));
    }

    const getGemFilters = () => {
        let gems = ["bronze", "silver", "gold", "emerald", "sapphire", "ruby", "amethyst", "diamond", "pink diamond", "galaxy opal"];

        return gems.map(gem => {
            let gemStyles;

            switch(gem) {
                case "bronze": gemStyles = { filter: `drop-shadow(0px 0px 1px #B2725C)` }; break;
                case "silver": gemStyles = { filter: `drop-shadow(0px 0px 1px #9A9A9A)` }; break;
                case "gold": gemStyles = { filter: `drop-shadow(0px 0px 1px #EBE513)` }; break;
                case "emerald": gemStyles = { filter: `drop-shadow(0px 0px 1px #5AC573)` }; break;
                case "sapphire": gemStyles = { filter: `drop-shadow(0px 0px 1px #498AE8)` }; break;
                case "ruby": gemStyles = { filter: `drop-shadow(0px 0px 1px #EF5A5D)` }; break;
                case "amethyst": gemStyles = { filter: `drop-shadow(0px 0px 1px #CF67D7)` }; break;
                case "diamond": gemStyles = { filter: `drop-shadow(0px 0px 1px #22D2F2)` }; break;
                case "pink diamond": gemStyles = { filter: `drop-shadow(0px 0px 1px #FF96DF)` }; break;
                case "galaxy opal": gemStyles = { filter: `drop-shadow(0px 0px 1px #D389D7)` }; break;
            }

            return (
                <p className="control" key={gem}>
                    <button 
                        className={`button is-small ${searchOptions.filterOptions.overall.includes(gem) ? "is-active filter-button-active" : ""}`} 
                        onClick={() => handleFilter("overall", gem)}
                    >
                        <figure className={`image is-16`} style={gemStyles}>
                            <img src={`https://2kdbimg.com/16/icon_${gem.replace(/ /g, "_")}.png`} />
                        </figure>
                    </button>
                </p>
            )
        })
    }

    const getPositionFilter = () => {
        let positions = ["PG", "SG", "SF", "PF", "C"];

        return positions.map(pos => {
            return (
                <p className="control" key={pos}>
                    <button className={`button is-small ${searchOptions.filterOptions.position.includes(pos) ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("position", pos)}>{pos}</button>
                </p>
            )
        })
    }

    return (
        <div className="container">
            <div className="container">
                <div className="columns is-mobile is-multiline">
                    <div className="column is-full">
                        <p className="heading">Search Settings: </p>
                        <div className="container is-flex container-mobile">
                            <div className="control" style={{ width: "100%" }}>
                                <input className="input is-small" value={searchOptions.searchValue} onChange={handleChange} type="text" placeholder="Search players..."/>
                            </div>
                            <button className="button is-small" onClick={() => handleSortDirection()}>
                                {searchOptions.asc ? <FaSortAmountUp /> : <FaSortAmountDown />}
                            </button>
                            <Dropdown title="Players Per Page" items={getPlayerAmounts()} />
                            <button className={`button is-small ${searchOptions.evos ? "is-active filter-button-active" : ""}`} 
                                onClick={() => handleOptions({ ...searchOptions, evos: !searchOptions.evos })}>Evos</button>
                            <button className={`button is-small ${searchOptions.duos ? "is-active filter-button-active" : ""}`} 
                                onClick={() => handleOptions({ ...searchOptions, duos: !searchOptions.duos })}>Duos</button>
                            <button className={`button is-small ${searchOptions.filterOptions.secondary ? "is-active filter-button-active" : ""}`}
                                onClick={() => handleOptions({ ...searchOptions, filterOptions: { ...searchOptions.filterOptions, secondary: !searchOptions.filterOptions.secondary }})}
                            >
                                Include Secondary Position
                            </button>
                            <button className="button is-small" onClick={() => clearOptions()}>Clear Options</button>
                        </div>
                    </div>
                    <div className="column is-4-tablet is-full-mobile">
                        <p className="heading">Filter By Overall: </p>
                        <div className="field has-addons">
                            {getGemFilters()}
                        </div>
                    </div>
                    <div className="column is-3-tablet is-3-widescreen is-2-fullhd">
                        <p className="heading">Filter By Position: </p>
                        <div className="field has-addons">
                            {getPositionFilter()}
                        </div>
                    </div>
                    <div className="column is-5-tablet is-5-widescreen is-6-fullhd is-full-mobile">
                        <p className="heading">Filter By Animations: </p>
                        <div className="container is-flex li-nopadding">
                            <Dropdown title={animationCat.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/A/g, "")} items={getAnimationCats()} />
                            {showAnimationFilters()}
                            <SearchFilter suggestions={filterItems} handleAnimationFilter={handleAnimationFilter} animationCat={animationCat} placeholder={`Search ${animationCat.replace(/_/g, " ")} here`} />
                        </div>
                    </div>
                    <div className="column is-3-tablet">
                        <p className="heading">Filter By Badges: </p>
                        <Dropdown title="Finishing" items={getBadgeItems("finishing")} />
                        <Dropdown title="Shooting" items={getBadgeItems("shooting")} />
                        <Dropdown title="Playmaking" items={getBadgeItems("playmaking")} />
                        <Dropdown title="Defensive" items={getBadgeItems("defense")} />
                    </div>
                    
                    <div className="column is-5-tablet is-full-mobile">
                        <p className="heading">Sort By Stats: </p>
                        <Dropdown title="Shooting" items={getDropdownItems("shootingStats")} />
                        <Dropdown title="Inside Scoring" items={getDropdownItems("insideStats")} />
                        <Dropdown title="Playmaking" items={getDropdownItems("playmakingStats")} />
                        <Dropdown title="Athleticism" items={getDropdownItems("athleticismStats")} />
                        <Dropdown title="Defense" items={getDropdownItems("defenseStats")} />
                        <Dropdown title="Rebound" items={getDropdownItems("reboundStats")} />
                    </div>
                    <div className="column is-4-tablet is-full-mobile">
                        <p className="heading">Sort By Tendencies: </p>
                        <Dropdown title="Inside" items={getDropdownItems("insideT")} />
                        <Dropdown title="Shooting" items={getDropdownItems("shootingT")} />
                        <Dropdown title="Defense" items={getDropdownItems("defenseT")} />
                        <Dropdown title="Freelance" items={getDropdownItems("freelanceT")} />
                        <Dropdown title="Passing" items={getDropdownItems("passingT")} />
                    </div>
                    <div className="column is-3-tablet is-full-mobile">
                        <p className="heading">Sort By Misc: </p>
                        <button className={`button is-small ${searchOptions.sortOptions.includes("date") ? "is-active filter-button-active" : ""}`} onClick={() => handleSort("date")}>Date</button>
                        <button className={`button is-small ${searchOptions.sortOptions.includes("totalBadges") ? "is-active filter-button-active" : ""}`} onClick={() => handleSort("totalBadges")}>Total Badges</button>
                        <button className={`button is-small ${searchOptions.sortOptions.includes("wingspan") ? "is-active filter-button-active" : ""}`} onClick={() => handleSort("wingspan")}>Wingspan</button>
                    </div>
                    <div className="column is-3-widescreen is-full-mobile">
                        <p className="heading">Filter By Misc: </p>
                        <Dropdown title="By Team" items={getTeamDropdownItems()} />
                    </div>
                </div>
            </div>
        </div>
    )
}
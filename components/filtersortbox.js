import React, { Fragment } from "react";
import { IoIosCheckmark } from "react-icons/io";
import Dropdown from "./dropdown";
// import SearchFilter from "./searchfilter";

export default function FilterSortBox(props) {
    const { searchOptions, handleOptions, } = props;
    // const [filterCat, setFilterCat] = useState({ cat: "lower base", innerCat: "shooting" });
    // const [filterItems, setFilterItems] = useState(allAnimations.shooting.lower_base_a)

    // useEffect(() => {
    //     setFilterItems(allAnimations[filterCat?.innerCat][filterCat?.cat.replace(/ /g, "_") + "_a"])
    // }, [filterCat])

    // const handleFilterCat = (cat, innerCat) => {
    //     setFilterCat({ cat: cat, innerCat: innerCat })
    // }

    const handleChange = (e) => handleOptions({ ...searchOptions, searchValue: e.target.value });

    const handlePerPage = (num) => handleOptions({ ...searchOptions, perPage: num });

    const handleFilter = (prop, value="") => {
        const { filterOptions } = searchOptions;
        let values = filterOptions[prop];

        if (filterOptions[prop].indexOf(value) === -1) {
            values.push(value);
        } else {
            values = values.filter(item => item !== value);
        }

        handleOptions({ ...searchOptions, filterOptions: { ...filterOptions, [prop]: values } });
    }

    const handleSort = (prop) => {
        const { sortProp } = searchOptions;
        let newProp = prop;

        if (sortProp === prop)
        newProp = "";

        handleOptions({ ...searchOptions, sortProp: newProp });
    }

    // const getAnimationCats = () => {
    //     let cats = [
    //         "Lower Base", "Upper Release", "Dribble Style", "Size Up Packages", "Moving Crossover", "Moving Behind The Back", 
    //         "Moving Hesitation", "Moving Spin", "Triple Threat Style", "Layup Package", "Post Fade", "Post Hook"
    //     ];

    //     return cats.map((cat, i) => {
    //         let innerCat = ""
    //         switch(cat) {
    //             case "Lower Base": innerCat = "shooting"; break;
    //             case "Upper Release": innerCat = "shooting"; break;
    //             case "Dribble Style": innerCat = "ballhandle"; break;
    //             case "Size Up Packages": innerCat = "ballhandle"; break;
    //             case "Moving Crossover": innerCat = "ballhandle"; break;
    //             case "Moving Behind The Back": innerCat = "ballhandle"; break;
    //             case "Moving Hesitation": innerCat = "ballhandle"; break;
    //             case "Moving Spin": innerCat = "ballhandle"; break;
    //             case "Triple Threat Style": innerCat = "ballhandle"; break;
    //             case "Layup Package": innerCat = "layup"; break;
    //             case "Post Fade": innerCat = "post"; break;
    //             case "Post Hook": innerCat = "post"; break;
    //         }

    //         return (
    //             <a className="dropdown-item" key={i} onClick={() => handleFilterCat(cat.toLowerCase(), innerCat)}>
    //                 {cat}
    //             </a>
    //         )}
    //     )
    // }

    const getDropdownItems = (cat) => {
        let items = [];
        switch(cat) {
            case "shootingStats": items = ["Shot Close", "Shot Mid", "Shot 3pt", "Shot IQ", "Free Throw", "Offensive Consistency"]; break;
            case "insideStats": items = ["Driving Layup", "Standing Dunk", "Driving Dunk", "Draw Foul", "Post Moves", "Post Hook", "Post Fade", "Hands"]; break;
            case "playmakingStats": items = ["Speed With Ball", "Ball Handle", "Passing Accuracy", "Passing Vision", "Passing IQ"]; break;
            case "athleticismStats": items = ["Speed", "Acceleration", "Vertical", "Strength", "Stamina", "Hustle"]; break;
            case "defenseStats": items = [
                "Interior Defense", "Perimeter Defense", "Help Defense IQ", "Lateral Quickness", "Pass Perception", "Steal", "Block", "Defensive Consistency"
            ]; break;
            case "reboundStats": items = ["Offensive Rebound", "Defensive Rebound"]; break;
            case "potentialStats": items = ["Intangibles", "Potential"]; break;
            case "insideT": items = [
                "Standing Dunk T", "Driving Dunk T", "Flashy Dunk T", "Alley Oop T", "Putback Dunk T", "Crash T", "Driving Layup T", "Spin Layup T", "Hop Step Layup T", 
                "Euro Step Layup T", "Floater T"
            ]; break;
            case "shootingT": items = [
                "Step Through Shot T", "Shot Under Basket T", "Shot Close T", "Shot Mid T", "Shot 3pt T", "Spot Up Shot 3pt T", "Off Screen Shot 3pt T", "Contested Jumper Mid T", 
                "Contested Jumper 3pt T", "Stepback Jumper Mid T", "Stepback Jumper 3pt T", "Spin Jumper T", "Transition Pull Up 3pt T", "Drive Pull Up 3pt T", "Drive Pull Up Mid T",
                "Use Glass"
            ]; break;
            case "driveT": items = ["Drive", "Spot Up Drive T", "Off Screen Drive T", "Attack Strong On Drive"]; break;
            case "defenseT": items = ["Pass Interception T", "Take Charge T", "On Ball Steal T", "Contest Shot T", "Block Shot T", "Foul T", "Hard Foul T"]; break;
            case "freelanceT": items = ["Shoot T", "Touches T", "Roll Vs Pop T", "Transition Spot Up T", "Play Discipline T"]; break;
            case "passingT": items = ["Flashy Pass T", "Alley Oop Pass T"]; break;
        }

        return items.map((stat, i) => (
            <a 
                key={i} 
                className={`dropdown-item ${searchOptions.sortProp === stat.toLowerCase().replace(/ /g, "_") ? "is-active" : ""}`} 
                onClick={() => handleSort(stat.toLowerCase().replace(/ /g, "_"))}
            >
                {stat}
            </a>
        ));
    }

    const getPlayerAmounts = () => {
        let amount = [15, 20, 30, 40, 50];
        return amount.map((num, i) => (
            <a 
                key={i} 
                className={`dropdown-item ${searchOptions.perPage === num ? "is-active" : ""}`} 
                onClick={() => handlePerPage(num)}
            >
                {num}
            </a>
        ));
    }

    return (
        <div className="container">
            <div className="field">
                <div className="control">
                    <input className="input" value={searchOptions.searchValue} onChange={handleChange} type="text" placeholder="Search players..." />
                </div>
            </div>
            <div className="container">
                <div className="columns is-mobile is-multiline">
                    <div className="column is-full">
                        <button className="button is-small">
                            {searchOptions.asc ? "Descending" : "Ascending"}
                        </button>
                        <Dropdown title="Players Per Page" items={getPlayerAmounts()} />
                    </div>
                    <div className="column is-4-widescreen">
                        <p className="heading">Filter By Overall: </p>
                        <div className="field has-addons">
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("bronze") ? "is-active filter-button-active" : ""}`} 
                                    onClick={() => handleFilter("overall", "bronze")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #B2725C)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_bronze.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("silver") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "silver")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #9A9A9A)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_silver.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("gold") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "gold")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #EBE513)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_gold.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("emerald") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "emerald")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #5AC573)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_emerald.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("sapphire") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "sapphire")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #498AE8)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_sapphire.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("ruby") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "ruby")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #EF5A5D)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_ruby.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("amethyst") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "amethyst")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #CF67D7)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_amethyst.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("diamond") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "diamond")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #22D2F2)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_diamond.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("pink diamond") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "pink diamond")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #FF96DF)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_pink_diamond.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterOptions.overall.includes("galaxy opal") ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("overall", "galaxy opal")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #D389D7)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_galaxy_opal.png`} />
                                    </figure>
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="column is-2-widescreen">
                        <p className="heading">Filter By Position: </p>
                        <div className="field has-addons">
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterOptions.position.includes("PG") ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("position", "PG")}>PG</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterOptions.position.includes("SG") ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("position", "SG")}>SG</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterOptions.position.includes("SF") ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("position", "SF")}>SF</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterOptions.position.includes("PF") ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("position", "PF")}>PF</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterOptions.position.includes("C") ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("position", "C")}>C</button>
                            </p>
                        </div>
                    </div>
                    <div className="column is-6-widescreen">
                        <p className="heading">Sort By Stats: </p>
                        <Dropdown title="Shooting" items={getDropdownItems("shootingStats")} />
                        <Dropdown title="Inside Scoring" items={getDropdownItems("insideStats")} />
                        <Dropdown title="Playmaking" items={getDropdownItems("playmakingStats")} />
                        <Dropdown title="Athleticism" items={getDropdownItems("athleticismStats")} />
                        <Dropdown title="Defense" items={getDropdownItems("defenseStats")} />
                        <Dropdown title="Rebounding" items={getDropdownItems("reboundStats")} />
                        <Dropdown title="Potential" items={getDropdownItems("potentialStats")} />
                    </div>
                    <div className="column is-6-widescreen">
                        <p className="heading">Sort By Tendencies: </p>
                        <Dropdown title="Inside T" items={getDropdownItems("insideT")} />
                        <Dropdown title="Shooting T" items={getDropdownItems("shootingT")} />
                        <Dropdown title="Drive T" items={getDropdownItems("driveT")} />
                        <Dropdown title="Defense T" items={getDropdownItems("defenseT")} />
                        <Dropdown title="Freelance T" items={getDropdownItems("freelanceT")} />
                        <Dropdown title="Passing T" items={getDropdownItems("passingT")} />
                    </div>
                    { /*<div className="column is-6-widescreen">
                        <p className="heading">Filter By Animations: </p>
                        <div className="container is-flex">
                            <Dropdown title={filterCat.cat.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())} items={getAnimationCats()} />
                            <SearchFilter suggestions={filterItems} handleFilter={handleFilter} filterCat={filterCat} placeholder={`Search ${filterCat.cat.replace(/_/g, " ")} here`} />
                        </div>
                    </div>
                    
                    <div className="column ">
                        <p className="heading">Filter By Badges: </p>

                    </div> */}
                </div>
            </div>
        </div>
    )
}
import React from "react";
import SearchBar from "./searchbar";

export default function SearchPlayers(props) {
    const { players, handleClick, playerInfo, placeholder, styles, ref } = props;

    const handlePlayer = (playerName, playerId) => handleClick(playerInfo, playerId);

    return <SearchBar ref={ref} players={players} handleClick={handlePlayer} placeholder={placeholder} styles={styles} autoFocus={false} />
}


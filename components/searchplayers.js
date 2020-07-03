import React from "react";
import SearchBar from "./searchbar";

export default function SearchPlayers(props) {
    const { players, handleClick, playerInfo, placeholder } = props;

    const handlePlayer = (playerName, playerId) => {
        handleClick(playerInfo, playerId);
    }

    return <SearchBar players={players} handleClick={handlePlayer} placeholder={placeholder} />
}


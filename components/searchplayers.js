import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import styles from "./searchplayers.module.css";

export default function SearchPlayers(props) {
    const { handlePlayer, playerInfo } = props;
    const [value, setValue] = useState('');
    const [players, setPlayers] = useState([]);

    const handleClick = (playerId) => handlePlayer(playerInfo, getPlayerData(playerId));
    const onChange = (event, { newValue, method }) => setValue(newValue);
    const onSuggestionsFetchRequested = ({ value }) => setPlayers();
    const onSuggestionsClearRequested = () => setPlayers([]);

    const getSuggestionValue = (suggestion) => {
        handlePlayer(playerInfo);
        return suggestion.name;
    }

    const renderSuggestion = (suggestion) => (
        <span className="is-marginless" onClick={() => handleClick(suggestion.id)}>
            {suggestion.name} | {suggestion.overall} | {suggestion.position}
        </span>
    );

    const inputProps = {
        placeholder: 'Search player to compare',
        value,
        onChange
    };

    return (
        <Autosuggest
            theme={styles}
            suggestions={players}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} 
        />
    )
}
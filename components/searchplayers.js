import { useState } from "react";
import Autosuggest from "react-autosuggest"
import { getPlayersData, getPlayerData } from "../lib/players"

export default function SearchPlayers(props) {
    const { handlePlayer, playerInfo } = props;
    const allPlayers = getPlayersData();
    const [value, setValue] = useState('');
    const [players, setPlayers] = useState([]);

    const onChange = (event, { newValue, method }) => setValue(newValue)
    const handleClick = (e, playerId) => {
        e.preventDefault();
        handlePlayer(playerInfo, getPlayerData(playerId))
    }

    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : allPlayers.filter(lang => {
            let name = lang.name.toLowerCase().split(" ");
            
            return (
                name[0].slice(0, inputLength) === inputValue || 
                name[1].slice(0, inputLength) === inputValue
            )
        });
    };
    const onSuggestionsFetchRequested = ({ value }) => setPlayers(getSuggestions(value))
    const onSuggestionsClearRequested = () => setPlayers([])
    const getSuggestionValue = (suggestion) => suggestion.name
    const renderSuggestion = (suggestion) => (
        <span onClick={(e) => handleClick(e, suggestion.id)}>
            {suggestion.name} | {suggestion.overall} | {suggestion.position}
        </span>
    )

    const inputProps = {
        placeholder: 'Search player to compare',
        value,
        onChange
    }

    return (
        <Autosuggest
            suggestions={players}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} 
        />
    )
}
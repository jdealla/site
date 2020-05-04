import { useState } from "react";
import Autosuggest from "react-autosuggest"
import { getPlayersData } from "../lib/players"
import { useRouter } from 'next/router'

export default function SearchBar() {
    const allPlayers = getPlayersData();
    const [value, setValue] = useState('');
    const [players, setPlayers] = useState([]);
    const router = useRouter()

    const onChange = (event, { newValue, method }) => setValue(newValue)
    const handleClick = (e, playerId) => {
        e.preventDefault();
        console.log(playerId)
        router.push(`/players/${playerId}`)
    }

    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : allPlayers.filter(lang => {
            console.log(lang.name);
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
        placeholder: 'Search for players here',
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
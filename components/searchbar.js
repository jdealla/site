import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import styles from "./searchbar.module.scss";

export default function SearchBar(props) {
    const { handleClick, players, placeholder } = props;
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    
    const onChange = (event, { newValue, method }) => setValue(newValue);
    const onSuggestionsFetchRequested = ({ value }) => setItems(getItemsBySuggestion(value));
    const onSuggestionsClearRequested = () => setItems([]);
    
    const getSuggestionValue = (suggestion) => {
        handleClick(suggestion.id);
        return suggestion.name;
    };

    const getItemsBySuggestion = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : players.filter(player => {
            let name = player.name.toLowerCase().split(" ");
            return (
                name[0].slice(0, inputLength) === inputValue || 
                name[1].slice(0, inputLength) === inputValue
            )
        });
    }

    const renderSuggestion = (suggestion) => (
        <div className="has-text-black" onClick={() => handleClick(suggestion.id)}>
            {suggestion.name} | {suggestion.overall} | {suggestion.position}
        </div>
    );
    
    const inputProps = {
        placeholder,
        value,
        onChange
    };

    return (
        <Autosuggest
            theme={styles}
            suggestions={items}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} 
        />
    )
}
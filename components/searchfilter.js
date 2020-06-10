import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import styles from "./searchfilter.module.scss";

export default function SearchFilter(props) {
    const { suggestions, handleFilter, filterCat, placeholder } = props;
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    
    const onChange = (event, { newValue, method }) => setValue(newValue);
    const onSuggestionsFetchRequested = ({ value, reason }) => {
        if (reason === 'input-focused' || reason === 'input-changed' || reason === 'escape-pressed')
            setItems(getItemsBySuggestion(value));
    }
    const onSuggestionsClearRequested = () => setItems([]);
    
    const getSuggestionValue = (suggestion) => {
        handleFilter("animations", filterCat.cat.replace(/ /g, "_") + "_a", suggestion, filterCat.innerCat)
        return suggestion;
    };

    const getItemsBySuggestion = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : suggestions.filter(suggestion => {
            let name = suggestion.toLowerCase().split(" ");
            return (
                name[0].slice(0, inputLength) === inputValue || 
                name[1].slice(0, inputLength) === inputValue ||
                suggestion.trim().toLowerCase().includes(inputValue)
            )
        });
    }

    const renderSuggestion = (suggestion) => (
        <div className="has-text-black" onClick={() => handleFilter("animations", filterCat.cat.replace(/ /g, "_") + "_a", suggestion, filterCat.innerCat)}>
            {suggestion}
        </div>
    );

    const inputProps = {
        placeholder,
        value,
        type: "search",
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
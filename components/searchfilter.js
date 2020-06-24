import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import styles from "./searchfilter.module.scss";

export default function SearchFilter(props) {
    const { suggestions, handleAnimationFilter, animationCat, placeholder } = props;
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    
    const onChange = (event, { newValue, method }) => setValue(newValue);
    const onSuggestionsFetchRequested = ({ value, reason }) => {
        if (reason === 'input-focused' || reason === 'input-changed')
            setItems(getItemsBySuggestion(value));
        if (reason === 'escape-pressed')
            setItems([]);
    }
    const onSuggestionsClearRequested = () => setItems([]);
    
    const getSuggestionValue = (suggestion) => {
        return suggestion;
    };

    const getItemsBySuggestion = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : suggestions.filter(suggestion => {
            return (
                suggestion.trim().toLowerCase().includes(inputValue)
            )
        });
    }

    const renderSuggestion = (suggestion) => (
        <div className="has-text-black" onClick={() => handleAnimationFilter(animationCat, suggestion)}>
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
            highlightFirstSuggestion={true}
        />
    )
}
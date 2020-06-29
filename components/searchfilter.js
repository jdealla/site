import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import styles from "./searchfilter.module.scss";

export default function SearchFilter(props) {
    const { suggestions, handleAnimationFilter, animationCat, placeholder } = props;
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    
    const onChange = (event, { newValue, method }) => setValue(newValue);
    const onSuggestionsFetchRequested = ({ value }) => setItems(getItemsBySuggestion(value));
    const onSuggestionsClearRequested = () => setItems([]);
    
    const getSuggestionValue = (suggestion) => {
        return suggestion;
    };

    const getItemsBySuggestion = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        
        return inputLength === 0 ? suggestions : suggestions.filter(suggestion => {
            return (
                suggestion.trim().toLowerCase().includes(inputValue)
            )
        });
    }

    const renderSuggestion = (suggestion) => (
        <div className="has-text-black animations-padding" onClick={() => handleAnimationFilter(animationCat, suggestion)}>
            {suggestion}
        </div>
    );

    const onSuggestionSelected = () => setValue('');

    const shouldRenderSuggestions = () => true;

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
            shouldRenderSuggestions={shouldRenderSuggestions}
            highlightFirstSuggestion={true}
            onSuggestionSelected={onSuggestionSelected}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} 
        />
    )
}
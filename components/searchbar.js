import { useState } from "react";
import Autosuggest from "react-autosuggest";
import { getPlayerBySuggestion } from "../lib/players";

import styles from "./searchbar.module.scss";

export default function SearchBar(props) {
    const { handleClick } = props;
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    
    const onChange = (event, { newValue, method }) => setValue(newValue);
    const onSuggestionsFetchRequested = ({ value }) => setItems(getPlayerBySuggestion(value));
    const onSuggestionsClearRequested = () => setItems([]);
    
    const getSuggestionValue = (suggestion) => {
        handleClick(suggestion.id);
        return suggestion.name;
    };

    const renderSuggestion = (suggestion) => (
        <div className="has-text-black" onClick={() => handleClick(suggestion.id)}>
            {suggestion.name} | {suggestion.overall} | {suggestion.position}
        </div>
    );
    
    const inputProps = {
        placeholder: 'Search players',
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
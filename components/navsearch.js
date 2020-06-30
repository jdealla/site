import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import TagOverall from "./tagoverall";

import styles from "./navsearch.module.scss";

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
                name[1].slice(0, inputLength) === inputValue ||
                player.name.trim().toLowerCase().includes(inputValue)
            )
        });
    }

    const renderSuggestion = (suggestion) => (
        <div className="is-flex has-text-black" onClick={() => handleClick(suggestion.id)}>
            <img src={`https://2kdbimg.com/35/${suggestion.name.replace(/( |')/g, "_").toLowerCase()}_${suggestion.id}.jpg`} />
                <div className="is-flex navsearch-item-div">
                    <div className="ml-1 has-text-left"> 
                        <p className="title is-7">{suggestion.name}</p> 
                        <p className="subtitle">{suggestion.collection} / {suggestion.theme}</p>
                    </div>
                    <div>
                        <span className="tags ml-2 has-addons navsearch-tag-overall">
                            <span className="tag">{suggestion.position}{suggestion.secondary_position != null ? `/${suggestion.secondary_position}` : ""}</span> 
                            <TagOverall overall={suggestion.overall} />
                        </span>
                    </div>
                </div>
        </div>
    );
    
    const shouldRenderSuggestions = (value) => {
        return value.trim().length > 2;
    }
    
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
            shouldRenderSuggestions={shouldRenderSuggestions}
        />
    )
}
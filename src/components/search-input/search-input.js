import React from 'react';

import './search-input.css';

export default class SearchInput extends React.Component {
    state = {
        text: ''
    };

    changeValue = (e) => {
        this.setState({
            text: e.target.value
        });

        this.props.searchItems(e.target.value);
    };

    render() {
        return (
            <input placeholder="type of search" className="search-input" 
            onChange={this.changeValue} value={this.state.text}/>
        );
    }
}


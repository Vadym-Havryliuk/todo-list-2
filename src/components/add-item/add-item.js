import React from 'react';

import './add-item.css';

export default class AddItem extends React.Component {
    state = {
        text: ''
    };

    changeInput = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    createItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text);

        this.setState({
            text: ''
        });
    }
    
    render() {
        
        return (
            <form actions="#" onSubmit={this.createItem}>
                <input type="text" placeholder="What needs to be done?"
                value={this.state.text} onChange={this.changeInput} />
                <button type="submit">
                    Add
                </button>
            </form>
        );
    }
}

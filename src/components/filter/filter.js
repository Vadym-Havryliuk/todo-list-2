import React from 'react';

import './filter.css';

export default class Filter extends React.Component {
    state = {
        changed: 'All'
    };

    index = 100;

    changeStyles = (value) => {
        switch (value) {
            case 'All':
                this.setState({
                    changed: 'All'
                });
                this.props.allItems();
            break;
            case 'Active':
                this.setState({
                    changed: 'Active'
                });
                this.props.activeItems();
            break;
            case 'Done':
                this.setState({
                    changed: 'Done'
                });
                this.props.doneItems();
            break;
        }
    };

    render() {
        const words = ['All', 'Active', 'Done'];
        const { changed } = this.state;

        const buttons = words.map((item) => {
            return (
                <button key={this.index++} onClick={() => this.changeStyles(item)}
                className={changed === item ? 'button-active' : ''}>
                    {item}
                </button>
            );
        });

        return (
            <div className="three-buttons">
                {buttons}
            </div>
        ); 
    }
}
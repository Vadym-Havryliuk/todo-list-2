import React from 'react';
import ReactDOM from 'react-dom';

import './list-items.css';

export default class ListItems extends React.Component {
    index = 100;

    state = {
        actions: [
            { label: 'Drink Coffee', done: false, important: false },
            { label: 'Learn React', done: false, important: true },
            { label: 'Make Awesome App', done: false, important: false }
        ]
    };

    toggleDone = (id) => {
        const { actions } = this.state;

        this.changeArray(actions, 'done', id);
    };

    toggleImportant = (id) => {
        const { actions } = this.state;

        this.changeArray(actions, 'important', id);
    };

    changeArray = (arr, value, id) => {

        const newArr = arr.map((item, index) => {
            if (index === id) {
                item[value] = !item[value];

                return item;
            }

            return item;
        });

        this.setState({
            actions: newArr
        });
    };

    deleteItem = (id) => {
        const { actions } = this.state;

        const before = actions.slice(0, id);
        const after = actions.slice(id+1);

        const newArr = [...before, ...after];

        this.setState({
            actions: newArr
        });
    };

    render() {
        const { actions } = this.state;

        const items = actions.map((item, id) => {
            const { label, done, important } = item;

            let classNames = 'line';

            if (done) {
                classNames = 'line-t';
            }

            if (important) {
                classNames += ' important-text';
            }

            return (
                <li className="item" key={this.index++}>
                    <div className={classNames} onClick={() => this.toggleDone(id)}>
                        {label}
                    </div>
                    <div>
                        <button className="delete" onClick={() => this.deleteItem(id)}>
                            <i className="bi bi-trash"></i>
                        </button>
                        <button className="important" onClick={() => this.toggleImportant(id)}>
                            <i className="bi bi-exclamation-lg"></i>
                        </button> 
                    </div>
                </li>
            );
        });

        return (
            <ul className="list-items">
                {items}
            </ul>
        );
    }
}

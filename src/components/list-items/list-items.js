import React from 'react';

import './list-items.css';

export default class ListItems extends React.Component {
    index = 100;

    render() {
        const { actions, toggleDone, deleteItem, toggleImportant } = this.props;

        const items = actions.map((item, id) => {
            const { label, done, important, show } = item;

            let classNames = 'line';

            if (done) {
                classNames = 'line-t';
            }

            if (important) {
                classNames += ' important-text';
            }

            if (show) {
                return (
                    <li className="item" key={this.index++}>
                        <div className={classNames} onClick={() => toggleDone(id)}>
                            {label}
                        </div>
                        <div>
                            <button className="delete" onClick={() => deleteItem(id)}>
                                <i className="bi bi-trash"></i>
                            </button>
                            <button className="important" onClick={() => toggleImportant(id)}>
                                <i className="bi bi-exclamation-lg"></i>
                            </button> 
                        </div>
                    </li>
                );
            } 
        });

        return (
            <ul className="list-items">
                {items}
            </ul>
        );
    }
}

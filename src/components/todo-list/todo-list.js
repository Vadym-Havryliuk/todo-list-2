import React from 'react';

import Header from '../header';
import SearchInput from '../search-input';
import Filter from '../filter';
import ListItems from '../list-items';
import AddItem from '../add-item';

import './todo-list.css';

export default class TodoList extends React.Component {
    state = {
        actions: [
            { label: 'Drink Coffee', done: false, important: false, show: true },
            { label: 'Learn React', done: false, important: true, show: true },
            { label: 'Make Awesome App', done: false, important: false, show: true }
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

    newItem = (value) => {
        const newItem = {label: value, done: false, important: false, show: true};
        const newArr = [...this.state.actions, newItem];

        this.setState({
            actions: newArr
        });
    };

    findItems = (value) => {
        const { actions } = this.state;

        const newArr = actions.map((item) => {
            const { label } = item;

            if (label.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                item.show = true
                return item;
            } else {
                item.show = false
                return item;
            }
        });

        this.setState({
            actions: newArr
        });
    };

    allItems = () => {
        const { actions } = this.state;

        const newArr = actions.map((item) => {
            item.show = true;
            return item;
        });
        
        this.setState({
            actions: newArr
        });
    };

    activeItems = () => {
        const { actions } = this.state;

        const newArr = actions.map((item) => {
            if (!item.done) {
                item.show = true;
                return item;
            } else {
                item.show = false;
                return item;
            }
        });

        this.setState({
            actions: newArr
        });
    };

    doneItems = () => {
        const { actions } = this.state;

        const newArr = actions.map((item) => {
            if (item.done) {
                item.show = true;
                return item;
            } else {
                item.show = false;
                return item;
            }
        });

        this.setState({
            actions: newArr
        });
    };

    render() {
        return (
            <div className="todo-list">
                <Header />
                <div className="search-filter">
                    <SearchInput searchItems={this.findItems}/>
                    <Filter allItems={this.allItems}
                            activeItems={this.activeItems}
                            doneItems={this.doneItems} />
                </div>
                <ListItems toggleDone={this.toggleDone} toggleImportant={this.toggleImportant}
                deleteItem={this.deleteItem} actions={this.state.actions} />
                <AddItem  addItem = {this.newItem} />
            </div>
        );
    }
}


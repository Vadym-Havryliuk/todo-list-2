import Header from '../header';
import SearchInput from '../search-input';
import Filter from '../filter';
import ListItems from '../list-items';
import AddItem from '../add-item';
import './todo-list.css';

const TodoList = () => {
    return (
        <div className="todo-list">
            <Header />
            <div className="search-filter">
                <SearchInput/>
                <Filter/>
            </div>
            <ListItems/>
            <AddItem/>
        </div>
    );
};

export default TodoList;
import './add-item.css';

const AddItem = () => {
    return (
        <form actions="#">
            <input type="text" placeholder="What needs to be done?"/>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddItem;
import "./index.css";

function List(props) {

    return (
        <>
            <li className="task--types__list">
                <div className="about--list">
                    <input className="checkbox" type="checkbox" name="Checkbox" id="list" />
                    <p className="list__text">{props.text}</p>
                    <a href="#" className="list__category">Uncategorized</a>
                </div>

                <button className="task-list-btn">Delete</button>
            </li>
        </>
    )
}

export default List;
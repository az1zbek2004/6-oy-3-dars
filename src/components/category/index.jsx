import "./index.css"

function Category() {
    return (
        <>
            <div className="category">
                <select name="type" id="select">
                    <option className="category--title" value="Uncategorized">All</option>
                    <option className="category__text" value="Groceries">Groceries</option>
                    <option className="category__text" value="College">College</option>
                    <option className="category__text" value="Payments">Payments</option>
                </select>
            </div>
        </>
    )
}

export default Category;
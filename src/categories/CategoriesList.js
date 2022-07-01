import React from "react";
import NoneFound from "../commons/NoneFound";

function CategoriesList({ categories }) {
    if(categories && !categories.length) {
        return <NoneFound/>
    }
    return (
        <div className="category-list">
            {categories &&
                categories.map((category) => (
                    <div key={category.id} className="category-list-item">
                        <div className="details">
                            <div className="name">{category.displayName}</div>
                            <div className="total">&#8377; {category.total}</div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default CategoriesList;

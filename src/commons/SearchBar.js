import React from "react";
import "./SearchBar.scss";

export default function SearchBar({ handleSearch, value, placeholder }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={handleSearch}
            />
        </div>
    );
}

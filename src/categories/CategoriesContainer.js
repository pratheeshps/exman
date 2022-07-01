import React, { useState, useEffect, useMemo } from "react";
import SearchBar from "../commons/SearchBar";
import SectionHeader from "../commons/SectionHeader";
import CategoriesList from "./CategoriesList";
import "./categories.scss";

function CategoriesContainer() {
    const [categoriesList, setcategoriesList] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const list = [
            {
                id: 1,
                displayName: "Home renovation",
                total: 2030300,
            },
            {
                id: 2,
                displayName: "Groceries",
                total: 4567,
            },
            {
                id: 3,
                displayName: "Electricity",
                total: 1456,
            },
        ];
        setcategoriesList(list);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCategories = useMemo(() => {
        if (searchTerm === "") return categoriesList;
        return categoriesList.filter(
            (category) =>
                category.displayName
                    .toLowerCase()
                    .indexOf(searchTerm.toLowerCase()) > -1
        );
    }, [searchTerm, categoriesList]);

    return (
        <div className="categories-container">
            <SectionHeader header={"Categories"} />
            <SearchBar
                placeholder={"Search categories"}
                value={searchTerm}
                handleSearch={handleSearch}
            />
            <CategoriesList categories={filteredCategories} />
        </div>
    );
}

export default CategoriesContainer;

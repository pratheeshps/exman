import React, { useState, useEffect, useMemo, useCallback } from "react";
import SearchBar from "../commons/SearchBar";
import SectionHeader from "../commons/SectionHeader";
import CategoriesList from "./CategoriesList";
import CategoriesModal from "./CategoriesModal";
import "./categories.scss";

function CategoriesContainer() {
    const [categoriesList, setcategoriesList] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);

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

    const handleSearch = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleModal = useCallback((type) => {
        setShowModal(type);
    }, []);

    const handleClose = useCallback(() => {
        setShowModal(false);
    }, []);

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
            <CategoriesList
                categories={filteredCategories}
                handleModal={handleModal}
            />
            <CategoriesModal showModal={showModal} handleClose={handleClose} />
        </div>
    );
}

export default CategoriesContainer;

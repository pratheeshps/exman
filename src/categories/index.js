import React, { useCallback, useEffect, useState } from "react";
import "./categories.scss";
import Table from "../commons/table";

function Categories() {
    const HEADERS = {
        date: "Date",
        description: "Description",
        amount: "Amount",
    };
    const [tableData, setTableData] = useState([
        {
            date: 1656350912000,
            description: "Painting Putty",
            amount: 2080,
        },
        {
            date: 1655400512000,
            description: "Electrical wires",
            amount: 3450,
        },
        {
            date: 1654104512000,
            description: "Plumbing fittings",
            amount: 1250,
        },
    ]);

    const convertToDateString = (timestamp) => {
        const date = new Date(timestamp);
        return (
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()
        );
    };

    const calcuateTotal = () => {
        return tableData.reduce((acc, item) => {
            return acc = acc + item.amount;
        }, 0);
    };

    return (
        <div className="categories-container">
            <h2>Home renovation</h2>
            <Table
                headers={HEADERS}
                rows={tableData}
                footer={{
                    date: "",
                    description: "Total",
                    amount: calcuateTotal(),
                }}
                sorters={{
                    date: true,
                    description: true,
                    amount: true,
                }}
                processData={{
                    date: convertToDateString,
                }}
            />
        </div>
    );
}

export default Categories;

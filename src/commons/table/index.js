import React, { useCallback, useEffect, useState } from "react";
import "./table.scss";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function Table({ headers, rows, footer, sorters, processData }) {
    const isSortable = !!sorters;
    const [displayedRows, setDisplayedRows] = useState(rows);
    const [sorterData, setSorterData] = useState(sorters);
    const [currentSort, setCurrentSort] = useState("");

    useEffect(() => {
        if (!isSortable || currentSort === "") {
            return;
        }

        const sortedRows = rows.sort((a, b) => {
            if (sorterData[currentSort]) {
                return a[currentSort] < b[currentSort] ? 1 : -1;
            } else if (!sorterData[currentSort]) {
                return a[currentSort] > b[currentSort] ? 1 : -1;
            }
            return 0;
        });

        setDisplayedRows([...sortedRows]);
    }, [sorterData]);

    const handleToggleSort = useCallback((headerKey, isAsc) => {
        if (!isSortable) return;

        const newIsAsc = !isAsc;
        let newSorterData = { ...sorterData };
        newSorterData[headerKey] = newIsAsc;
        setCurrentSort(headerKey);
        setSorterData(newSorterData);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    {headers &&
                        Object.keys(headers).map((headerKey, index) => (
                            <th
                                key={`header-col-${index}`}
                                onClick={() =>
                                    handleToggleSort(
                                        headerKey,
                                        sorterData[headerKey]
                                    )
                                }
                            >
                                <div className="header-col-name">
                                    <div>{headers[headerKey]}</div>
                                    {isSortable &&
                                        sorterData[headerKey] !== undefined && (
                                            <div
                                                className={`sort-icon ${
                                                    sorterData[headerKey] ===
                                                    undefined
                                                        ? "disabled"
                                                        : ""
                                                }`}
                                            >
                                                {sorterData[headerKey] ? (
                                                    <BsChevronUp />
                                                ) : (
                                                    <BsChevronDown />
                                                )}
                                            </div>
                                        )}
                                </div>
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {displayedRows &&
                    displayedRows.map((row, rowIndex) => (
                        <tr key={`row-${rowIndex}`}>
                            {Object.keys(row).map((cell, cellIndex) => (
                                <td key={`col-${cellIndex}`}>
                                    {processData[cell]
                                        ? processData[cell](row[cell])
                                        : row[cell]}
                                </td>
                            ))}
                        </tr>
                    ))}
            </tbody>
            <tfoot>
                <tr>
                    {footer &&
                        Object.keys(footer).map((footerKey, fIndex) => (
                            <th key={`footer-col-${fIndex}`}>
                                {footer[footerKey]}
                            </th>
                        ))}
                </tr>
            </tfoot>
        </table>
    );
}

export default Table;

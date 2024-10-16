import React from "react";
import { Button } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useCommon } from '../hooks/useCommon'; // Import your custom hook

const DownloadButton = ({ fetchData, columns, filename }) => {
    const { getAmountWithCommas, getDate } = useCommon(); // Destructure the formatting functions
    const handleDownload = async () => {
        // Fetch full voucher data
        const fullData = await fetchData();

        if (!fullData || fullData.length === 0) {
            console.log("No data to download");
            return; 
        }

        const doc = new jsPDF();
        const tableColumn = columns;
        const tableRows = [];

        fullData.forEach((dataRow) => {
            const dataSet = columns.map(column => {
                let value = dataRow[column.dataKey];
                

                if (column.dataKey.toLowerCase().includes('date') && value) {
                    value = getDate(value);
                }
                if (typeof value === 'number' && column.dataKey.toLowerCase().includes('amount')) {
                    value = getAmountWithCommas(value);
                }

                return value !== null && value !== undefined ? value : '';
            });
            tableRows.push(dataSet);
        });

        
        doc.autoTable(tableColumn, tableRows);
        doc.save(`${filename}.pdf`);
    };

    return (
        <Button
            variant="link"
            className="text-center me-3"
            style={{ textDecoration: "none" }}
            onClick={handleDownload}
        >
            <FiDownload style={{ fontSize: "1.5rem", color: "#3474EB" }} />
            <br />
            <label style={{ textAlign: "center", color: "#000000" }}>Download</label>
        </Button>
    );
};

export default DownloadButton;

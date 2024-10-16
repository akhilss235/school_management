import React from "react";
import { Button } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DownloadButton = ({ fetchData, columns, filename }) => {
    const handleDownload = async () => {
        // Fetch full voucher data
        const fullData = await fetchData();

        if (!fullData || fullData.length === 0) {
            console.log("No data to download");
            return; // Exit if no data is available
        }

        const doc = new jsPDF();
        const tableColumn = columns; // Column headers
        const tableRows = [];

        // Formatting table data into rows
        fullData.forEach((dataRow) => {
            const dataSet = [
                dataRow.accountHead,
                dataRow.remarks,
                dataRow.cash,
                dataRow.bank,
                dataRow.voucherNo,
            ];
            tableRows.push(dataSet);
        });

        // Adding autoTable to the PDF
        doc.autoTable(tableColumn, tableRows);
        doc.save(`${filename}.pdf`); // Save the PDF with the given filename
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

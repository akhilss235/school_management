import React from "react";
import { Button } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useCommon } from '../hooks/useCommon'; // Import your custom hook

const DownloadButton = ({ fetchData, columns, filename,heading }) => {
    const { getAmountWithCommas, getDate } = useCommon(); // Destructure the formatting functions
    const handleDownload = async () => {
        // Fetch full voucher data
        const fullData = await fetchData();

        if (!fullData || fullData.length === 0) {
            console.log("No data to download");
            return; 
        }

        const doc = new jsPDF();

        // Calculate the center position for the dynamic heading
        const pageWidth = doc.internal.pageSize.getWidth();
        const titleX = pageWidth / 2 - (doc.getTextWidth(heading) / 2); // Calculate centered position
        
        // Set the header color for consistency
        const headerColor = [0, 102, 204]; // RGB color for the heading (matching the table header)

        // Add the dynamic heading to the document
        doc.setFontSize(18); // Set font size for heading
        doc.setTextColor(...headerColor); // Set color for heading (using spread operator)
        doc.setFont("helvetica", "bold"); // Set font to bold
        doc.text(heading, titleX, 15); // Position heading with reduced margin

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

        
        // doc.autoTable(tableColumn, tableRows);
        // Use the original autoTable method to create the table
        doc.autoTable(tableColumn, tableRows, {
            startY: 24, // Set startY to avoid overlapping with the heading
            theme: 'striped', // Optional: Set a table theme
            headStyles: { fillColor: headerColor, textColor: [255, 255, 255] }, // Set header color
            styles: { cellPadding: 3, fontSize: 10 }, // Adjust cell padding and font size
        });

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

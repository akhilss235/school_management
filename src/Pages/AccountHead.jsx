import React, { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import request from "../Request"; // Adjust the path as necessary

function AccountHead({ onSelect }) {
    const [accountHeads, setAccountHeads] = useState([]);
    const [selectedHead, setSelectedHead] = useState("");

    useEffect(() => {
        const fetchAccountHeads = async () => {
            try {
                const response = await request.get("getAccountMaster"); // Adjust the endpoint as needed
                const data = response.data.data; // Adjust based on your API response structure
                setAccountHeads(data);
            } catch (error) {
                console.error("Error fetching account heads:", error);
            }
        };

        fetchAccountHeads();
    }, []);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedHead(selectedValue);
        onSelect(selectedValue); // Notify parent component of selected value
    };

    return (
        <div>
            <InputGroup className="InputGroupText">
                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#FFFFFF" }}>
                    Account Head:
                </InputGroup.Text>
                <Form.Select
                    aria-describedby="basic-addon1"
                    style={{ borderLeft: "none" }}
                    value={selectedHead}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    {accountHeads.map(head => (
                        <option key={head.accountHead} value={head.accountHead}>
                            {head.accountHead}
                        </option>
                    ))}
                </Form.Select>
            </InputGroup>
        </div>
    );
}

export default AccountHead;

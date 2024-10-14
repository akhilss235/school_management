import { useState, useEffect } from 'react';
import request from "../Request"; // Adjust the import path according to your project structure

const useAccountHeads = () => {
    const [accountHeads, setAccountHeads] = useState([]);
    const [subAccountHeads, setSubAccountHeads] = useState([]);

    useEffect(() => {
        // Fetch account heads
        const fetchAccountHeads = () => {
            request.get("getAccountMaster")
                .then((response) => {
                    const data = response.data.data; // Adjust based on your API response structure
                    
                    // Extract unique account heads and sub account heads
                    const uniqueAccountHeads = [...new Set(data.map(account => account.accountHead))];
                    const uniqueSubAccountHeads = [...new Set(data.map(account => account.subAccountHead))];

                    setAccountHeads(uniqueAccountHeads);
                    setSubAccountHeads(uniqueSubAccountHeads);
                })
                .catch((err) => {
                    console.error("Error fetching account heads:", err);
                });
        };

        fetchAccountHeads(); // Call the fetch function
    }, []);

    return { accountHeads, subAccountHeads }; // Return only accountHeads and subAccountHeads
};

export default useAccountHeads;

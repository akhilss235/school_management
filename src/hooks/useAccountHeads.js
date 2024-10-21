import { useState, useEffect } from 'react';
import request from "../Request"; // Adjust the import path according to your project structure

// Custom hook to fetch account heads and sub-account heads from the API
const useAccountHeads = () => {
    const [accountHeads, setAccountHeads] = useState([]);
    const [subAccountHeads, setSubAccountHeads] = useState([]);

    useEffect(() => {
        const fetchAccountHeads = () => {
            request.get("getAccountMasterWithoutLimit")
                .then((response) => {
                    const data = response.data.data; // Adjust based on your API response structure
                    
                    const uniqueAccountHeads = [...new Set(data.map(account => account.accountHead))];
                    const uniqueSubAccountHeads = [...new Set(data.map(account => account.subAccountHead))];

                    setAccountHeads(uniqueAccountHeads);
                    setSubAccountHeads(uniqueSubAccountHeads);
                })
                .catch((err) => {
                    console.error("Error fetching account heads:", err);
                });
        };

        fetchAccountHeads(); 
    }, []);

    return { accountHeads, subAccountHeads, setSubAccountHeads }; 
};

export default useAccountHeads;

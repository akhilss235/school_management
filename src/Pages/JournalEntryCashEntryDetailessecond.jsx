import React, { useEffect, useState } from "react";
import request from "../Request";

function JournalEntryCashEntryDetailessecond({ accountHead }) {
    const [cashData, setCashData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (accountHead) {
            const handleGetSingleJournal = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await request.get(`getAccountHeadAmount/${accountHead}`);
                    console.log(response); // Log the entire response

                    if (response && response.data) {
                        const fetchedData = response.data; // Access the data directly
                        setCashData(fetchedData);
                    } else {
                        throw new Error("Unexpected response structure");
                    }
                } catch (error) {
                    console.error("Error fetching cash entry details:", error);
                    setError("Failed to fetch cash entry details. Please try again later.");
                } finally {
                    setLoading(false);
                }
            };

            handleGetSingleJournal();
        }
    }, [accountHead]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const { accountHead: head, amount } = cashData || {};
    const { cash = 0, bank = 0, diocesan = 0 } = amount || {};

    return (
        <div>
            <h5><b className="title">{head || "Account Name"}</b></h5>
            <div className="d-flex justify-content-start mt-4" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B CASH :</b></h5>
                <h5 className="mx-4"><b>{cash.toFixed(2)}</b></h5>
            </div>
            <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B BANK :</b></h5>
                <h5 className="mx-4"><b>{bank.toFixed(2)}</b></h5>
            </div>
            <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B DIO :</b></h5>
                <h5 className="mx-4"><b>{diocesan.toFixed(2)}</b></h5>
            </div>
        </div>
    );
}

export default JournalEntryCashEntryDetailessecond;

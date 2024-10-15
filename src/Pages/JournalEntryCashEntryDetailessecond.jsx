import React, { useEffect, useState } from "react";
import request from "../Request";

function JournalEntryCashEntryDetailessecond({ accountHead }) {
  const [cashData, setCashData] = useState(null);

  useEffect(() => {
    if (accountHead) {
      const handleGetSingleJournal = async () => {
        try {
          const response = await request.get(`getOpeningBalanceById/${accountHead}`);
          const fetchedData = response.data.data;
          setCashData(fetchedData); // Assuming fetchedData contains cash balance info
        } catch (error) {
          console.error("Error fetching cash entry details:", error);
          alert("Failed to fetch cash entry details.");
        }
      };

      handleGetSingleJournal();
    }
  }, [accountHead]);

  if (!cashData) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

  return (
    <div>
      <h5><b className="title">{cashData.accountName || "Account Name"}</b></h5>
      <div className="d-flex justify-content-start mt-4" style={{ textAlign: "center" }}>
        <h5><b className="title">C/B CASH :</b></h5>
        <h5 className="mx-4"><b>{cashData.cashBalance ? cashData.cashBalance.toFixed(2) : "0.00"}</b></h5>
      </div>
      <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
        <h5><b className="title">C/B BANK :</b></h5>
        <h5 className="mx-4"><b>{cashData.bankBalance ? cashData.bankBalance.toFixed(2) : "0.00"}</b></h5>
      </div>
      <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
        <h5><b className="title">C/B DIO :</b></h5>
        <h5 className="mx-4"><b>{cashData.dioBalance ? cashData.dioBalance.toFixed(2) : "0.00"}</b></h5>
      </div>
    </div>
  );
}

export default JournalEntryCashEntryDetailessecond;

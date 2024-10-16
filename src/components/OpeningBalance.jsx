import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus } from "react-icons/fi";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import { LuPenLine } from "react-icons/lu";
import { LiaEyeSolid } from "react-icons/lia";
import CashBookEntry from "../Models/CashBookEntry";
import CashBookEntryUpdate from "../Models/CashBookEntryUpdate";
import OpeningBalanceDetaies from "../Models/OpeningBalanceDetaies";
import { useOpening } from "../hooks/useOpening";
import { useCommon } from "../hooks/useCommon";
import AccountHead from "../Pages/AccountHead";
import { SubAccountHead } from "../Pages/SubAccountHead";
import { GetDate } from "../Pages/Date";
import Pagination from "./Pagination";
import { NoData } from "./NoData";

function OpeningBalance() {
  const { getAmountWithCommas, getDate } = useCommon();
  const {
    openingBalanceData,
    openingBalanceTotal,
    handleGetAllOpeningBalance,
  } = useOpening();
  
  const [modalCashBookEntry, setModalCashBookEntry] = useState(false);
  const [modalOpeningBalanceDetails, setModalOpeningBalanceDetails] = useState(false);
  const [modalCashBookEntryUpdate, setModalCashBookEntryUpdate] = useState(false);
  const [selectedAccountHead, setSelectedAccountHead] = useState("");
  const [selectedSubAccountHead, setSelectedSubAccountHead] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState(""); // Added this line
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const accountHead = (data) => {
    return data?.length > 18 ? `${data?.slice(0, 15)}...` : data;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEditClick = (accountId) => {
    setSelectedAccountId(accountId);
    setModalCashBookEntryUpdate(true);
};

const handleDETAILESClick = (accountId) => {
  setSelectedAccountId(accountId);
  setModalOpeningBalanceDetails(true);
};


  useEffect(() => {
    handleGetAllOpeningBalance(
      itemsPerPage,
      currentPage,
      fromDate,
      toDate,
      selectedAccountHead,
      selectedSubAccountHead
    );
  }, [
    currentPage,
    fromDate,
    toDate,
    selectedAccountHead,
    selectedSubAccountHead,
    modalCashBookEntry,
    modalCashBookEntryUpdate
  ]);

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
    <div className="d-flex justify-content-between">
      <div className="d-flex">
      <h4><b className="title">Opening Balance Entry</b></h4>

      </div>
      <div className="d-flex">

          <Button className="addbuttons" onClick={() => setModalCashBookEntry(true)}>
            <span><FiPlus /> Enter Opening Balance</span>
          </Button>
        </div>
    </div>



      <div className="row mb-2 mt-5 d-flex justify-content-between align-items-center">
        <div className="col-auto mt-2">
          <div className="card d-flex align-items-center justify-content-center filterbody" style={{ height: "30px" }}>
            <IconContext.Provider value={{ className: "react-icons", size: "1.5em" }}>
              <div className="d-flex align-items-center">
                <GoFilter className="Filteric" />
                <span className="Filteric p-2">Filter</span>
              </div>
            </IconContext.Provider>
          </div>



          
        </div>
        <div className="col-auto mt-2">
          <AccountHead onSelect={setSelectedAccountHead} />
        </div>
        <div className="col-auto mt-2">
          <SubAccountHead onSelect={setSelectedSubAccountHead} />
        </div>
        <div className="col-auto mt-2 d-flex ">
        <div className="mx-2">
        <GetDate title={"From"} selectedDate={fromDate} setSelectedDate={setFromDate} />

        </div>
       <div>
       <GetDate title={"To"} selectedDate={toDate} setSelectedDate={setToDate} />

       </div>
        </div>

      </div>

      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Date</th>
              <th>Account Head</th>
              <th>Sub Account Head</th>
              <th>Cash Amt</th>
              <th>Bank Amt</th>
              <th>Diocesan Amt.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {openingBalanceData.length > 0 ? (
              openingBalanceData.map((data) => (
                <tr key={data._id} style={{ fontSize: "15px" }}>
                  <td>{getDate(data.date)}</td>
                  <td>{data.accountHead}</td>
                  <td>{accountHead(data.subAccountHead) || "-"}</td>
                  <td>Rs. {getAmountWithCommas(data.amount.cash || 0)}</td>
                  <td>Rs. {getAmountWithCommas(data.amount.bank || 0)}</td>
                  <td>Rs. {getAmountWithCommas(data.amount.diocesan || 0)}</td>
                  <td>
                    <div className="d-flex">
                      <LiaEyeSolid className="mx-3" style={{ fontSize: "1.5rem", color: "#3474EB" }} onClick={() => handleDETAILESClick(data._id)} />
                      <LuPenLine style={{ fontSize: "1.5rem", color: "#3474EB" }} onClick={() => handleEditClick(data._id)} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>No data found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      {
        openingBalanceData.length !== 0 &&
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(openingBalanceTotal / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      }

      {/* Modals */}
      <CashBookEntry open={modalCashBookEntry} onClose={() => setModalCashBookEntry(false)} />
      <OpeningBalanceDetaies open={modalOpeningBalanceDetails} onClose={() => setModalOpeningBalanceDetails(false)} accountId={selectedAccountId} />
      <CashBookEntryUpdate open={modalCashBookEntryUpdate} onClose={() => setModalCashBookEntryUpdate(false)} accountId={selectedAccountId} />
    </div>
  );
}

export default OpeningBalance;
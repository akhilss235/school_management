import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { LuPenLine } from "react-icons/lu";
import { LiaEyeSolid } from "react-icons/lia";
import AccountViewCashEnter from "../Models/AccountViewCashEnter";
import AccountViewUpate from "../Models/AccountViewUpate";
import AccountViewDetailes from "../Models/AccountViewDetailes";
import Request from "../Request"; // Adjust the path as necessary
import { FiDownload } from "react-icons/fi";
import { IoPrintOutline } from "react-icons/io5";
import { GetDate } from "../Pages/Date";
import { Search } from "../Pages/Search";
import AccountHead from "../Pages/AccountHead";
import { CustomTableColumn } from "../Pages/TransactionMode";
import { useCommon } from "../hooks/useCommon";
import { useAccountView } from "../hooks/useAccountView";
import { NoData } from "./NoData";
import Pagination from "./Pagination";

function AccountView() {
  const [modalJournalEntryCashEntry, setModalJournalEntryCashEntry] =
    useState(false);
  const [modalOpeningBalanceDetaies, setModalOpeningBalanceDetaies] =
    useState(false);
  const [modalCashBookEntryUpdate, setModalCashBookEntryUpdate] =
    useState(false);

  const { getDate, getAmountWithCommas } = useCommon();
  const { accountViewData, accountViewTotal, handleAllAccountView } =
    useAccountView();

  const itemsPerPage = 10;
  const [rp, setRp] = useState("");
  const [search, setSearch] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [transactionMode, setTrasactionMode] = useState("");
  const [selectedAccountHead, setSelectedAccountHead] = useState("");

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const accoutHead = (data) => {
    return data?.length > 18 ? `${data?.slice(0, 15)}...` : data;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const params = {
      page: currentPage,
      limit: itemsPerPage,
      from: fromDate,
      to: toDate,
      accountHead: selectedAccountHead,
      search: search,
      rp: rp,
      transactionMode: transactionMode,
    };
    handleAllAccountView(params);
  }, [
    currentPage,
    fromDate,
    toDate,
    selectedAccountHead,
    search,
    rp,
    transactionMode,
    search,
  ]);

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="d-flex justify-content-between">
        <div>
          <h4>
            <b className="title">Account View</b>
          </h4>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <Button
              variant="link"
              className="text-center me-3"
              style={{ textDecoration: "none" }}
            >
              <FiDownload style={{ fontSize: "1.5rem", color: "#3474EB" }} />
              <br />
              <label style={{ textAlign: "center", color: "#000000" }}>
                Download
              </label>
            </Button>
            <Button
              variant="link"
              className="text-center"
              style={{ textDecoration: "none" }}
            >
              <IoPrintOutline
                style={{ fontSize: "1.5rem", color: "#3474EB" }}
              />
              <br />
              <label style={{ color: "#000000" }}>Print</label>
            </Button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <Form.Label size="lg">Select Cash Book Head</Form.Label>
          <AccountHead onSelect={setSelectedAccountHead} isTitle={false} />
        </div>
        <div className="col-sm-9">
          <div className="row mb-2  d-flex justify-content-between align-items-center">
            {/* Filter Button */}
            <div className="col-auto mt-2">
              <div
                className="card d-flex align-items-center justify-content-center filterbody"
                style={{ height: "30px" }}
              >
                <IconContext.Provider
                  value={{ className: "react-icons", size: "1.5em" }}
                >
                  <div className="d-flex align-items-center">
                    <GoFilter className="Filteric" />
                    <span className="Filteric p-2">Filter</span>
                  </div>
                </IconContext.Provider>
              </div>
            </div>

            {/* Class Dropdown */}
            <div className="col-auto mt-2">
              <CustomTableColumn
                title={"Receipt/Payment"}
                selectedItem={rp}
                setSelectedItem={setRp}
              />
            </div>
            <div className="col-auto mt-2">
              <CustomTableColumn
                title={"Tra.Mode"}
                selectedItem={transactionMode}
                setSelectedItem={setTrasactionMode}
              />
            </div>

            <div className="col-auto mt-2">
              <Button
                className="addbuttons"
                onClick={() => setModalJournalEntryCashEntry(true)}
              >
                <span style={{ fontSize: "auto" }}>
                  <FiPlus />
                  New Entry
                </span>
              </Button>
            </div>

            <div className="d-flex col-auto ">
              <GetDate
                title={"From"}
                selectedDate={fromDate}
                setSelectedDate={setFromDate}
              />
            </div>
            <div className="d-flex col-auto ">
              <GetDate
                title={"To"}
                selectedDate={toDate}
                setSelectedDate={setToDate}
              />
            </div>
            <div className="col-auto mt-2">
              <Search search={search} setSearch={setSearch} />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr style={{ color: "#505050" }}>
              <th>Date</th>
              <th>Narration</th>
              <th>Tra. Mode</th>
              <th>Receipt/Payment</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {accountViewData.length > 0 &&
              accountViewData.map((data) => (
                <tr key={data._id} style={{ fontSize: "15px" }}>
                  <td>{getDate(data.date)}</td>
                  <td>{data.rp}</td>
                  <td>{data.transactionMode}</td>
                  <td>{accoutHead(data.accountHead) || "-"}</td>
                  <td>{accoutHead(data.subAccountHead) || "-"}</td>
                  <td>{accoutHead(data.narration) || "-"}</td>
                  <td>Rs. {getAmountWithCommas(data.amount || 0)}</td>
                  <td>
                    <div className="d-flex">
                      <LiaEyeSolid
                        style={{ fontSize: "1.5rem", color: "#3474EB" }}
                        className="mx-3"
                        onClick={() => setModalOpeningBalanceDetaies(true)}
                      />
                      <LuPenLine
                        style={{ fontSize: "1.5rem", color: "#3474EB" }}
                        onClick={() => setModalCashBookEntryUpdate(true)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <NoData model={accountViewData} />
      </div>
      {accountViewData.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(accountViewTotal / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      )}

      {/* Modals */}
      <AccountViewCashEnter
        open={modalJournalEntryCashEntry}
        onClose={() => setModalJournalEntryCashEntry(false)}
      />
      <AccountViewDetailes
        open={modalOpeningBalanceDetaies}
        onClose={() => setModalOpeningBalanceDetaies(false)}
      />
      <AccountViewUpate
        open={modalCashBookEntryUpdate}
        onClose={() => setModalCashBookEntryUpdate(false)}
      />
    </div>
  );
}

export default AccountView;

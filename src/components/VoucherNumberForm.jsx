import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { LuPenLine } from "react-icons/lu";
// import { LiaEyeSolid } from "react-icons/lia";
import VoucherCashEnter from "../Models/VoucherCashEnter";
import VoucherAdmin from "../Models/VoucherAdmin";
// import VoucherDetailes from "../Models/VoucherDetailes";
import Request from "../Request"; // Adjust the path as necessary
import { FiDownload } from "react-icons/fi";
import { IoPrintOutline } from "react-icons/io5";
import { useVoucher } from "../hooks/useVoucher";
import { useCommon } from "../hooks/useCommon";
import AccountHead from "../Pages/AccountHead";
import { Search } from "../Pages/Search";
import { NoData } from "./NoData";
import Pagination from "./Pagination";

function VoucherNumberForm() {
  const [modalJournalEntryCashEntry, setModalJournalEntryCashEntry] =
    useState(false);
  // const [modalOpeningBalanceDetaies, setModalOpeningBalanceDetaies] =
  useState(false);
  const [modalCashBookEntryUpdate, setModalCashBookEntryUpdate] =
    useState(false);
  const itemsPerPage = 10;

  const [search, setSearch] = useState("");
  const [selectedAccountHead, setSelectedAccountHead] = useState("");

  const { getAmountWithCommas } = useCommon();
  const { voucherData, voucherTotal, handleGetAllVoucher } = useVoucher();

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const accoutHead = (data)=>{ 
    return data?.length > 20 ? `${data?.slice(0, 20)}...` : data
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const obj = {
      accountHead: selectedAccountHead,
      limit: itemsPerPage,
      page: currentPage,
      search: search,
    };
    handleGetAllVoucher(obj);
  }, [selectedAccountHead, search, currentPage]);

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="d-flex justify-content-between">
        <div>
          <h4>
            <b className="title">Voucher Number Form</b>
          </h4>
        </div>
        <div></div>
      </div>

      <div className="row mb-2  d-flex justify-content-between align-items-center">
        {/* Filter Button */}
        <div className="col-auto d-flex mt-2">
          <div
            className="card d-flex align-items-center justify-content-center filterbody"
            style={{ height: "35px" }}
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

          <div>
            <AccountHead onSelect={setSelectedAccountHead} />
          </div>
        </div>

        <div className="col-auto mt-2">
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className="col-auto mt-2">
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

        <div className="col-auto mt-2">
          <Button
            className="addbuttons"
            onClick={() => setModalJournalEntryCashEntry(true)}
          >
            <span>
              <FiPlus /> Voucher Number
            </span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr style={{ color: "#505050" }}>
              <th>Account Head</th>
              <th>Remarks</th>
              <th>Cash</th>
              <th>Bank</th>
              <th>Voucher Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              voucherData.length > 0 &&
              voucherData.map((data)=>(
                  <tr key={data._id} style={{fontSize:"15px"}}>
                    <td>{accoutHead(data.accountHead) || "-"}</td>
                    <td>{accoutHead(data.remarks) || "-"}</td>
                    <td>Rs. {getAmountWithCommas(data.cash || 0)}</td>
                    <td>Rs. {getAmountWithCommas(data.bank || 0)}</td>
                    <td>{getAmountWithCommas(data.voucherNo || 0)}</td>
                    <td>
                      <div className="d-flex">
                        
                        <LuPenLine
                          style={{ fontSize: "1.5rem", color: "#3474EB" }}
                          onClick={() => setModalCashBookEntryUpdate(true)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </Table>
        <NoData model={voucherData}/>
      </div>
      {
        voucherData.length !== 0 &&
        <Pagination 
            currentPage={currentPage}
            totalPages={Math.ceil(voucherTotal / itemsPerPage)}
            onPageChange={handlePageChange}
        />
      }

      {/* Modals */}
      <VoucherCashEnter
        open={modalJournalEntryCashEntry}
        onClose={() => setModalJournalEntryCashEntry(false)}
      />
      {/* <VoucherDetailes
        open={modalOpeningBalanceDetaies}
        onClose={() => setModalOpeningBalanceDetaies(false)}
      /> */}
      <VoucherAdmin
        open={modalCashBookEntryUpdate}
        onClose={() => setModalCashBookEntryUpdate(false)}
      />
    </div>
  );
}

export default VoucherNumberForm;

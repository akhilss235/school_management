import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoPrintOutline } from "react-icons/io5";
import { useCommon } from "../hooks/useCommon";
import { useReports } from "../hooks/useReports";
import AccountHead from "../Pages/AccountHead";
import { SubAccountHead } from "../Pages/SubAccountHead";
import { GetDate } from "../Pages/Date";
import { CustomTableColumn } from "../Pages/TransactionMode";
import { NoData } from "./NoData";
import Pagination from "./Pagination";

function Reports() {
  const itemsPerPage = 10;
  const [rp, setRp] = useState("");
  const [search, setSearch] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [transactionMode, setTrasactionMode] = useState("");
  const [selectedAccountHead, setSelectedAccountHead] = useState("");
  const [selectedSubAccountHead, setSelectedSubAccountHead] = useState("");
  
  const { getDate, getAmountWithCommas } = useCommon();
  const { reportData, reportTotal, handleGetAllReports } = useReports();
  
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
    const obj = {
      page: currentPage,
      limit: itemsPerPage,
      from: fromDate,
      to: toDate,
      accountHead: selectedAccountHead,
      subAccountHead: selectedSubAccountHead,
      search: search,
      rp: rp,
      transactionMode: transactionMode,
    };
    handleGetAllReports(obj);
  }, [
    currentPage,
    fromDate,
    toDate,
    selectedAccountHead,
    selectedSubAccountHead,
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
            <b className="title">Reports</b>
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

      <div className="row mb-2 mt-5 ">
        <div className="col-sm-6 mt-2">
          <CustomTableColumn title={"Receipt/Payment"} selectedItem={rp} setSelectedItem={setRp}/>
        </div>

        {/* Section Dropdown */}
        <div className="col mt-2">
          <Form.Label>Select Account Head</Form.Label>
          <AccountHead onSelect={setSelectedAccountHead} isTitle={false} />
        </div>
      </div>
      <div className="row mb-2 mt-2 ">
        <div className="col-sm-6 mt-2">
          <Form.Label>Select Sub Account Head</Form.Label>
          <SubAccountHead
            onSelect={setSelectedSubAccountHead}
            isTitle={false}
          />
        </div>

        {/* Section Dropdown */}
        <div className="col d-flex mt-2">
          <div>
            <GetDate
              title={"From"}
              selectedDate={fromDate}
              setSelectedDate={setFromDate}
            />
          </div>
          <div className="mx-2">
            <GetDate
              title={"To"}
              selectedDate={toDate}
              setSelectedDate={setToDate}
            />
          </div>
          <div className="mt-2">
            <InputGroup
              className="mt-4 mx-2"
              style={{ borderRadius: "150px", overflow: "hidden" }}
            >
              <InputGroup.Text
                id="basic-addon1"
                style={{
                  backgroundColor: "#3474EB",
                  color: "#FFFFFF",
                }}
              >
                <FaSearch style={{ color: "#FFFFFF" }} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="search...."
                style={{
                  fontSize: "small",
                  borderLeft: "none",
                  backgroundColor: "#3474EB",
                  color: "#FFFFFF",
                }}
                className="placeholder-white" // Add a class for custom styling
              />
            </InputGroup>
          </div>
        </div>
      </div>

      {/* New Student Button */}

      {/* Table */}
      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Date</th>
              <th>Narration</th>
              <th>R. Cash</th>
              <th>R. Bank</th>
              <th>R. Diocesan</th>
              <th>P. Cash</th>
              <th>P. Bank</th>
              <th>P. Diocesan</th>
            </tr>
          </thead>
          <tbody>
            {
              reportData.length > 0 &&
              reportData.map((data)=>(
                  <tr key={data._id} style={{ cursor: "pointer" }}>
                    <td>
                      <a
                      href="/StudentDetails"
                      style={{ textDecoration: "none", color: "#505050" }}
                    >
                      {getDate(data.date)}
                    </a>
                    </td>
                    <td>{accoutHead(data.narration) || "-"}</td>
                    <td>Rs. {getAmountWithCommas(data.r.cash || 0)}</td>
                    <td>Rs. {getAmountWithCommas(data.r.bank || 0)}</td>
                    <td>Rs. {getAmountWithCommas(data.r.diocesan || 0)}</td>
                    <td>Rs. {getAmountWithCommas(data.p.cash || 0)}</td>
                    <td>Rs. {getAmountWithCommas(data.p.bank || 0)}</td>
                    <td>Rs. {getAmountWithCommas(data.p.diocesan || 0)}</td>
                  </tr>
                ))
            }
          </tbody>
        </Table>
        <NoData model={reportData} />
      </div>
      {
        reportData.length !== 0 &&
        <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(reportTotal / itemsPerPage)}
            onPageChange={handlePageChange}
        />
      }
    </div>
  );
}

export default Reports;

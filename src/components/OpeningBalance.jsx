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
import CashBookEntry from "../Models/CashBookEntry";
import CashBookEntryUpdate from "../Models/CashBookEntryUpdate";
import OpeningBalanceDetaies from "../Models/OpeningBalanceDetaies";
import Request from "../Request"; // Adjust the path as necessary

function OpeningBalance() {
  const [modalCashBookEntry, setModalCashBookEntry] = useState(false);
  const [modalOpeningBalanceDetaies, setModalOpeningBalanceDetaies] = useState(false);
  const [modalCashBookEntryUpdate, setModalCashBookEntryUpdate] = useState(false);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Request.get("/api/Students");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
      <h4>
        <b className="title">Opening Balance Entry</b>
      </h4>
      <div className="row mb-2 mt-5 d-flex justify-content-between align-items-center">
        {/* Filter Button */}
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

        {/* Class Dropdown */}
        <div className="col-auto mt-2">
          <InputGroup className="InputGroupText">
            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#FFFFFF" }}>
              Account Head :
            </InputGroup.Text>
            <Form.Select aria-describedby="basic-addon1" style={{ borderLeft: "none" }}>
              <option value="">All</option>
              <option value="">Class A</option>
            </Form.Select>
          </InputGroup>
        </div>

        {/* Section Dropdown */}
        <div className="col-auto mt-2">
          <InputGroup>
            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#FFFFFF" }}>
              Sub Account Head :
            </InputGroup.Text>
            <Form.Select aria-describedby="basic-addon1" style={{ borderLeft: "none" }}>
              <option value="">All</option>
              <option value="sectionA">Section A</option>
            </Form.Select>
          </InputGroup>
        </div>

        {/* From Date */}
        <div className="col-auto mt-2">
          <InputGroup>
            <InputGroup.Text style={{ backgroundColor: "#FFFFFF" }}>
              From :
            </InputGroup.Text>
            <Form.Control id="Fromdate" type="date" name="Fromdate" style={{ fontSize: "small", borderLeft: "none" }} />
          </InputGroup>
        </div>

        {/* To Date */}
        <div className="col-auto mt-2">
          <InputGroup>
            <InputGroup.Text style={{ backgroundColor: "#FFFFFF" }}>
              To :
            </InputGroup.Text>
            <Form.Control id="todate" type="date" name="todate" style={{ fontSize: "small", borderLeft: "none" }} />
          </InputGroup>
        </div>

        {/* New Student Button */}
        <div className="col-auto">
          <Button className="addbuttons" onClick={() => setModalCashBookEntry(true)}>
            <span style={{ fontSize: "auto" }}>
              <FiPlus /> Enter Opening Balance
            </span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr style={{ color: "#505050" }}>
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
            <tr>
              <td>07/10/2024</td>
              <td>CATHEDRAL NURSERY AND PRIMARY</td>
              <td>ADVANCE FROM MANAGEMENT</td>
              <td>Rs. 30,500</td>
              <td>Rs. 30,500</td>
              <td>Rs. 30,500</td>
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
          </tbody>
        </Table>
      </div>

      {/* Modals */}
      <CashBookEntry open={modalCashBookEntry} onClose={() => setModalCashBookEntry(false)} />
      <OpeningBalanceDetaies open={modalOpeningBalanceDetaies} onClose={() => setModalOpeningBalanceDetaies(false)} />
      <CashBookEntryUpdate open={modalCashBookEntryUpdate} onClose={() => setModalCashBookEntryUpdate(false)} />
    </div>
  );
}

export default OpeningBalance;

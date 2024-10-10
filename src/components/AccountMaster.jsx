import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { LuPenLine } from "react-icons/lu";
import AccountMasterEntry from "../Models/AccountMasterEntry";
import AccountMasterUpdate from "../Models/AccountMasterUpdate";
import Request from "../Request"; // Adjust the path as necessary
import { RiDeleteBinLine } from "react-icons/ri";

function AccountMaster() {
  const [modalCashBookEntry, setModalCashBookEntry] = useState(false);
  const [modalCashBookEntryUpdate, setModalCashBookEntryUpdate] =
    useState(false);

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
      <div className="d-flex justify-content-between">
        <div>
          <h4>
            <b className="title">Account Master</b>
          </h4>
        </div>
        <div>
          <Button
            className="Delete"
            onClick={() => setModalCashBookEntry(true)}
          >
            <span style={{ fontSize: "auto" }}>
              <RiDeleteBinLine /> Delete
            </span>
          </Button>
        </div>
      </div>

      <div className="row mb-2 mt-5 d-flex justify-content-between align-items-center">
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
          <InputGroup className="InputGroupText">
            <InputGroup.Text
              id="basic-addon1"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              Account Head :
            </InputGroup.Text>
            <Form.Select
              aria-describedby="basic-addon1"
              style={{ borderLeft: "none" }}
            >
              <option value="">All</option>
              <option value="">Class A</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div className="col-auto mt-2">
          <InputGroup>
            <InputGroup.Text style={{ backgroundColor: "#FFFFFF" }}>
              From :
            </InputGroup.Text>
            <Form.Control
              id="Fromdate"
              type="date"
              name="Fromdate"
              style={{ fontSize: "small", borderLeft: "none" }}
            />
          </InputGroup>
        </div>

        {/* To Date */}
        <div className="col-auto mt-2">
          <InputGroup>
            <InputGroup.Text style={{ backgroundColor: "#FFFFFF" }}>
              To :
            </InputGroup.Text>
            <Form.Control
              id="todate"
              type="date"
              name="todate"
              style={{ fontSize: "small", borderLeft: "none" }}
            />
          </InputGroup>
        </div>
        <div className="col-auto mt-2">
          <Form.Control placeholder="Search...." type="text" />
        </div>
        {/* New Student Button */}
        <div className="col-auto">
          <Button
            className="addbuttons"
            onClick={() => setModalCashBookEntry(true)}
          >
            <span style={{ fontSize: "auto" }}>
              <FiPlus />
              New Account Head
            </span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr style={{ color: "#505050" }}>
              <th>
                <div>
                  <div class="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" />
                  </div>
                </div>
              </th>
              <th>Created on</th>
              <th>Account Head</th>
              <th>Sub Account Head</th>
              <th>Action</th>
          
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <div>
                  <div class="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" />
                  </div>
                </div></td>
              <td>CATHEDRAL NURSERY AND PRIMARY</td>
              <td>ADVANCE FROM MANAGEMENT</td>
   
              <td>Rs. 30,500</td>
              <td>
                <div className="d-flex">
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
      <AccountMasterEntry
        open={modalCashBookEntry}
        onClose={() => setModalCashBookEntry(false)}
      />

      <AccountMasterUpdate
        open={modalCashBookEntryUpdate}
        onClose={() => setModalCashBookEntryUpdate(false)}
      />
    </div>
  );
}

export default AccountMaster;

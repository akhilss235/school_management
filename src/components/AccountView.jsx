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

function AccountView() {
  const [modalJournalEntryCashEntry, setModalJournalEntryCashEntry] =
    useState(false);
  const [modalOpeningBalanceDetaies, setModalOpeningBalanceDetaies] =
    useState(false);
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
        <Form.Label size='lg'>Select Cash Book Head</Form.Label>

          <Form.Select size="lg" aria-describedby="basic-addon1">
            <option value="">Main Cash Book (HM)</option>
            <option value="">Class A</option>
          </Form.Select>
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
              <InputGroup size="sm">
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  Receipt/Payment :
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
              <InputGroup size="sm">
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  Tra.Mode :
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
              <InputGroup style={{ height: "35px" }} size="sm">
                <InputGroup.Text style={{ backgroundColor: "#FFFFFF" }}>
                  From :
                </InputGroup.Text>
                <Form.Control
                  id="Fromdate"
                  type="date"
                  size="sm"
                  name="Fromdate"
                  style={{ fontSize: "small", borderLeft: "none" }}
                />
              </InputGroup>
            </div>
            <div className="d-flex col-auto ">
              <InputGroup style={{ height: "35px" }} size="sm">
                <InputGroup.Text style={{ backgroundColor: "#FFFFFF" }}>
                  To :
                </InputGroup.Text>
                <Form.Control
                  id="todate"
                  size="sm"
                  type="date"
                  name="todate"
                  style={{ fontSize: "small", borderLeft: "none" }}
                />
              </InputGroup>
            </div>
            <div className="col-auto mt-2">
              <Form.Control
                id="Search"
           
                type="text"
                placeholder="Search"
                name="Search"
                style={{ fontSize: "small" }}
              />
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
              <th>Receipt/ Payment</th>
              <th>Tra. Mode</th>
              <th>Account Head</th>
              <th>Sub Account Head</th>
              <th>Narration</th>
              <th>Amount</th>
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
              <td>Rs. 30,500</td>
              <td>
                <div className="d-flex">
                <div>
                <LiaEyeSolid
                    style={{ fontSize: "1.5rem", color: "#3474EB" }}
                    className="mx-1"
                    onClick={() => setModalOpeningBalanceDetaies(true)}
                  />
                </div>
                <div>
                <LuPenLine
                    style={{ fontSize: "1.5rem", color: "#3474EB" }}
                    onClick={() => setModalCashBookEntryUpdate(true)}
                  />
                  </div>
            
    
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

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

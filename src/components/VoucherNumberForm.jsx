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

function VoucherNumberForm() {
  const [modalJournalEntryCashEntry, setModalJournalEntryCashEntry] = useState(false);
  // const [modalOpeningBalanceDetaies, setModalOpeningBalanceDetaies] =
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
    <div className="container-fluid p-3"  style={{ backgroundColor: "#FFFFFF" }}>
      <div className="d-flex justify-content-between">
        <div>
          <h4>
            <b className="title">Journal Entry</b>
          </h4>
        </div>
        <div>

        </div>
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
          <InputGroup   >
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
        </div>

        {/* <div className="col-auto mt-2">

        </div>
  
        <div className="col-auto mt-2">
   
        </div> */}
       
 
   
        <div className="col-auto mt-2">
            <Form.Control
              id="Search"
          
              type="text"
              placeholder="Search"
              name="Search"
             
            />
          </div>
          <div className="col-auto mt-2">
<div className="d-flex align-items-center">
        <Button variant="link" className="text-center me-3" style={{ textDecoration: "none" }}>
          <FiDownload style={{ fontSize: "1.5rem", color: "#3474EB" }} />
          <br />
          <label style={{ textAlign: 'center', color: "#000000" }}>Download</label>
        </Button>
        <Button variant="link" className="text-center" style={{ textDecoration: "none" }}>
          <IoPrintOutline style={{ fontSize: "1.5rem", color: "#3474EB" }} />
          <br />
          <label style={{ color: "#000000" }}>Print</label>
        </Button>
      </div>
</div>
     
          <div className="col-auto mt-2" >
          <Button
            className="addbuttons"
            onClick={() => setModalJournalEntryCashEntry(true)}
          >
            <span >
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
              <th>Date</th>
              <th>Receipt/
              Payment</th>
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
                  {/* <LiaEyeSolid
                    style={{ fontSize: "1.5rem", color: "#3474EB" }}
                    className="mx-3"
                    onClick={() => setModalOpeningBalanceDetaies(true)}
                  /> */}
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
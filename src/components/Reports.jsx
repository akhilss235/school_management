import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Request from "../Request"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoPrintOutline } from "react-icons/io5";

function Reports() {
  const fetchData = async () => {
    try {
      const response = await Request.get("/api/Students");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();

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
          <Form.Label>Receipt/Payment</Form.Label>

          <Form.Select aria-describedby="basic-addon1">
            <option value="">All</option>
            <option value="">Class A</option>
          </Form.Select>
        </div>

        {/* Section Dropdown */}
        <div className="col mt-2">
          <Form.Label>Select Account Head</Form.Label>

          <Form.Select aria-describedby="basic-addon1">
            <option value="">All</option>
            <option value="">Section A</option>
          </Form.Select>
        </div>
      </div>
      <div className="row mb-2 mt-2 ">
        <div className="col-sm-6 mt-2">
          <Form.Label>Select Sub Account Head</Form.Label>

          <Form.Select aria-describedby="basic-addon1">
            <option value="">All</option>
            <option value="">Class A</option>
          </Form.Select>
        </div>

        {/* Section Dropdown */}
        <div className="col d-flex mt-2">
          <div>
            <Form.Label>From Date:</Form.Label>
            <Form.Control type="date" />
          </div>
          <div className="mx-2">
            <Form.Label>To Date:</Form.Label>
            <Form.Control type="date" />
          </div>
          <div className="mt-2">
  <InputGroup className="mt-4 mx-2" style={{ borderRadius: '150px', overflow: 'hidden' }}>
    <InputGroup.Text
      id="basic-addon1"
      style={{
        backgroundColor: '#3474EB',
        color: '#FFFFFF',
      }}
    >
      <FaSearch style={{ color: '#FFFFFF' }} />
    </InputGroup.Text>
    <Form.Control
      type="text"
      placeholder="search...."
      style={{
        fontSize: 'small',
        borderLeft: 'none',
        backgroundColor: '#3474EB',
        color: '#FFFFFF',
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
            <tr style={{ cursor: "pointer" }}>
              <td>
                <a
                  href="/StudentDetails"
                  style={{ textDecoration: "none", color: "#505050" }}
                >
                  20240015678
                </a>
              </td>

              <td>Emma Thomas</td>
              <td>I</td>
              <td>A</td>
              <td>Olivier Thomas</td>
              <td>Male</td>
              <td>07/14/2016</td>
 
<td>hhh</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Reports;

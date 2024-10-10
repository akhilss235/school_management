import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus, FiDownload } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { LuPenLine } from "react-icons/lu";
import Request from "../Request"; // Adjust the path as necessary

function Students() {
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
  
        <h4>
          <b className="title">Students</b>
        </h4>
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
            <InputGroup>
              <InputGroup.Text
                id="basic-addon1"
                style={{  backgroundColor: "#FFFFFF" }}
                
              >
                Class:
              </InputGroup.Text>
              <Form.Select aria-describedby="basic-addon1"   style={{borderLeft:'none' }}>
                <option value="">All</option>
                <option value="">Class A</option>
              </Form.Select>
            </InputGroup>
          </div>

          {/* Section Dropdown */}
          <div className="col-auto mt-2">
            <InputGroup className="InputGroupText">
              <InputGroup.Text
                id="basic-addon1"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                Section:
              </InputGroup.Text>
              <Form.Select aria-describedby="basic-addon1" style={{borderLeft:'none' }}>
                <option value="">All</option>
                <option value="">Section A</option>
              </Form.Select>
            </InputGroup>
          </div>

          {/* Gender Dropdown */}
          <div className="col-auto mt-2">
            <InputGroup className="InputGroupText">
              <InputGroup.Text
                id="basic-addon1"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                Gender:
              </InputGroup.Text>
              <Form.Select aria-describedby="basic-addon1" style={{borderLeft:'none' }}>
                <option value="">All</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </Form.Select>
            </InputGroup>
          </div>

          {/* Search Field */}
          <div className="col-auto mt-2">
            <Form.Control
              id="Search"
              type="text"
              placeholder="Search"
              name="Search"
              style={{ fontSize: "small" }}
            />
          </div>

          {/* Download Icon */}
          <div className="col-auto d-flex align-items-center">
            <FiDownload style={{ fontSize: "1.5rem", color: "#3474EB" }} />
          </div>

          {/* New Student Button */}
          <div className="col-auto mt-2">
            <a
              href="/StudentRegister"
              style={{ textDecoration: "none", color: "#505050" }}
            >
              <Button className="addbuttons">
                <span style={{ fontSize: "auto" }}>
                  <FiPlus /> New Student
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <Table responsive="xl">
            <thead style={{ color: "#505050" }}>
              <tr>
                <th>EMIS ID</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Father Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Phone No.</th>
                <th>Aadhar No.</th>
                <th>Action</th>
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
                <td>+91 90876 54331</td>
                <td>1234 5678 9012</td>
                <td>
                  <a
                    href="/StudentRegisterupdate"
                    style={{ textDecoration: "none", color: "#505050" }}
                  >
                    <LuPenLine
                      style={{ fontSize: "1.5rem", color: "#3474EB" }}
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
    
    </div>
  );
}

export default Students;

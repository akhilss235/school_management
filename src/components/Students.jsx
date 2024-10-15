import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus, FiDownload } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { LuPenLine } from "react-icons/lu";
import request from "../Request"; // Adjust the path as necessary
import Pagination from "../components/Pagination"; 

  function Students() {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await request.get(`/getAllStudent?search=${searchTerm}&page=${currentPage}&limit=${itemsPerPage}`);
        setStudents(response.data.data || []);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage)); // Set total pages for pagination
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [currentPage, searchTerm]); // Fetch data when currentPage or searchTerm changes
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      setCurrentPage(1); // Reset to first page on search
    };
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
      <h4><b className="title">Students</b></h4>
      <div className="row mb-2 mt-5 d-flex justify-content-between align-items-center" style={{ position: 'sticky' }}>
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
          <InputGroup>
            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#FFFFFF" }}>
              Class:
            </InputGroup.Text>
            <Form.Select aria-describedby="basic-addon1" style={{ borderLeft: 'none' }}>
              <option value="">All</option>
              <option value="">Class A</option>
            </Form.Select>
          </InputGroup>
        </div>

        {/* Section Dropdown */}
        <div className="col-auto mt-2">
          <InputGroup className="InputGroupText">
            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#FFFFFF" }}>
              Section:
            </InputGroup.Text>
            <Form.Select aria-describedby="basic-addon1" style={{ borderLeft: 'none' }}>
              <option value="">All</option>
              <option value="">Section A</option>
            </Form.Select>
          </InputGroup>
        </div>

        {/* Gender Dropdown */}
        <div className="col-auto mt-2">
          <InputGroup className="InputGroupText">
            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#FFFFFF" }}>
              Gender:
            </InputGroup.Text>
            <Form.Select aria-describedby="basic-addon1" style={{ borderLeft: 'none' }}>
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
            value={searchTerm}
            onChange={handleSearch}
            style={{ fontSize: "small" }}
          />
        </div>

        {/* Download Icon */}
        <div className="col-auto d-flex align-items-center">
          <FiDownload style={{ fontSize: "1.5rem", color: "#3474EB" }} />
        </div>

        {/* New Student Button */}
        <div className="col-auto mt-2" style={{ position: 'sticky' }}>
          <a href="/StudentRegister" style={{ textDecoration: "none", color: "#505050" }}>
            <Button className="addbuttons" style={{ position: 'sticky' }}>
              <span style={{ fontSize: "auto" }}>
                <FiPlus /> New Student
              </span>
            </Button>
          </a>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        {students.length > 0 ? (
          <Table responsive>
            <thead style={{ color: "#505050" }}>
              <tr>
                <th>EMIS ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Father's Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Phone No.</th>
                <th>Aadhar No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>
                    <a href={`/StudentDetails/${student.emisId}`} style={{ textDecoration: "none", color: "#505050" }}>
                      {student.emisId}
                    </a>
                  </td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.section}</td>
                  <td>{student.fatherName}</td>
                  <td>{student.gender}</td>
                  <td>{new Date(student.dob).toLocaleDateString()}</td>
                  <td>{student.phoneNumber}</td>
                  <td>{student.aadharNumber}</td>
                  <td>
                    <a href={`/StudentRegisterupdate/${student._id}`} style={{ textDecoration: "none", color: "#505050" }}>
                      <LuPenLine style={{ fontSize: "1.5rem", color: "#3474EB" }} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No students available.</p>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Students;

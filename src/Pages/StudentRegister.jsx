import React from "react";
import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import trash from "../img/trash.svg";
import StudentRegisterclone from "../Pages/StudentRegisterclone";

import request from "../Request"; // Adjust the path as necessary

function StudentRegister() {
  const [formData, setFormData] = useState({
    emisId: "",
    admissionNumber: "",
    name: "",
    nameInTamil: "",
    class: "",
    section: "",
    fatherName: "",
    fatherTamilName: "",
    motherName: "",
    motherTamilName: "",
    aadharNumber: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    doj: "",
    address: "",
    pincode: "",
    bloodGroup: "",
    religion: "",
    moi: "",
    community: "",
    groupCode: "",
    disabilityName: "",
    motherTongue: "",
    bankAccount: "",
    ifscCode: "",
    micr: "",
    tcNumber: "",
    tcStatus: "",
    tcIssueDate: "",
    studentImg: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFormData((prevData) => ({ ...prevData, studentImg: file }));
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setFormData((prevData) => ({ ...prevData, studentImg: null }));
    document.getElementById("fileInput").value = "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.name) errors.push("Name is required.");
    if (!formData.emisId) errors.push("EMIS ID is required.");
    // Add more validations as needed
    if (errors.length) {
      setError(errors.join(" "));
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    setLoading(true);
    try {
      const response = await request.post("addStudent", formDataToSubmit);
      console.log("Success:", response.data);
      setSuccess(true);
      setFormData({
        emisId: "",
        admissionNumber: "",
        name: "",
        nameInTamil: "",
        class: "",
        section: "",
        fatherName: "",
        fatherTamilName: "",
        motherName: "",
        motherTamilName: "",
        aadharNumber: "",
        phoneNumber: "",
        gender: "",
        dob: "",
        doj: "",
        address: "",
        pincode: "",
        bloodGroup: "",
        religion: "",
        moi: "",
        community: "",
        groupCode: "",
        disabilityName: "",
        motherTongue: "",
        bankAccount: "",
        ifscCode: "",
        micr: "",
        tcNumber: "",
        tcStatus: "",
        tcIssueDate: "",
        studentImg: null,
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-pale-blue py-3">
      <Form className="studentregisterform roboto-font" onSubmit={handleSubmit}>
        <div className=" p-3 bg-white rounded-4">
          <Row className="justify-content-between align-items-center mt-2 mb-3">
            <Col xs={"auto"}>
              <span className="fw-600 roboto-font" style={{ fontSize: "20px" }}>
                New Student
              </span>
            </Col>
          </Row>
          <Row>
            <Col
              sm={6}
              xl={3}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <Col>
                  <Form.Label column sm={12}>
                    EMIS id
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="emisId"
                    value={formData.emisId}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              sm={6}
              xl={3}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <Col>
                  <Form.Label column sm={12}>
                    Name
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              sm={6}
              xl={3}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <Col>
                  <Form.Label column sm={12}>
                    Name in Tamil
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="nameInTamil"
                    value={formData.nameInTamil}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              sm={6}
              xl={3}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <Col>
                  <Form.Label column sm={12}>
                    Class
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                  >
                    <option value="">Select Class</option>
                    <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
              <option value="VII">VII</option>
              <option value="VIII">VIII</option>
              <option value="IX">IX</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
                    {/* Add more classes as needed */}
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              sm={6}
              xl={3}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <Col>
                  <Form.Label column sm={12}>
                    Section
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Select
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                  >
                    <option value="">Select section</option>
                    <option value="A"> A</option>
                    <option value="B"> B</option>
                    <option value="C"> C</option>
                    <option value="D"> D</option>
                    <option value="E"> E</option>
                    <option value="F"> F</option>
                    <option value="G"> G</option>{" "}
                  </Form.Select>
                </Col>
              </Row>
            </Col>
            <Col
              sm={6}
              xl={3}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <Col>
                  <Form.Label column sm={12}>
                    Father Name
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              sm={6}
              xl={3}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <Col>
                  <Form.Label column sm={12}>
                    Father Name in Tamil
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="fatherTamilName"
                    value={formData.fatherTamilName}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              sm={6}
              xl={3}
              className="d-flex flex-column justify-content-between"
            >
              <Row>
                <Col>
                  <Form.Label column sm={12}>
                    Mother Name
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <StudentRegisterclone
            handleChange={handleChange}
            formData={formData}
            handleFileChange={handleFileChange}
            selectedFile={selectedFile}
            handleFileClick={handleFileClick}
            handleFileRemove={handleFileRemove}
          />{" "}
        </div>

        <Row className="justify-content-end align-items-center my-4 gy-2">
          <Col xs={"auto"}>
            <Button
              className="fw-600"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#ED1C00",
                border: "none",
                width: "160px",
              }}
            >
              Discard
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button
              className="fw-600"
              style={{
                backgroundColor: "#3474EB",
                color: "#FFFFFF",
                border: "none",
                width: "160px",
              }}
              type="submit"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">
          Student registered successfully!
        </div>
      )}
    </div>
  );
}

export default StudentRegister;

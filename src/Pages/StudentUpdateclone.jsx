import React from "react";
import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import trash from "../img/trash.svg";

const StudentUpdateclone = ({
  handleChange,
  formData,
  handleFileChange,
  selectedFile,
  handleFileClick,
  handleFileRemove,
}) => {
  return (
    <div>
      <Row>
        <Col
          sm={6}
          xl={3}
          className="d-flex flex-column justify-content-between"
        >
          <Row>
            <Col>
              <Form.Label column sm={12}>
                Mother Name in Tamil
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="motherTamilName"
                value={formData.motherTamilName}
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
                Aadhar Number
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
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
                Phone Number
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
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
                Date of Birth
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
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
                Gender
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                     <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

                <option>1</option>
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
                Date of Joining
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="date"
                name="doj"
                value={formData.doj}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          <Row>
            <Col>
              <Form.Label column sm={12}>
                Address
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
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
                Pincode
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="pincode"
                value={formData.pincode}
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
                Blood Group
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>

                <option>1</option>
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
                Religion
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="religion"
                value={formData.religion}
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
                Medium of Instruction
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="moi"
                value={formData.moi}
                onChange={handleChange}
              />
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
                Admission Number
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="admissionNumber"
                value={formData.admissionNumber}
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
                Community
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="community"
                value={formData.community}
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
                Disability Group Name
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="disabilityName"
                value={formData.disabilityName}
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
                Group Code
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="groupCode"
                value={formData.groupCode}
                onChange={handleChange}
              />
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
                Mother Tongue
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="motherTongue"
                value={formData.motherTongue}
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
                Bank Account
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
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
                IFSC Code
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
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
                MICR
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="micr"
                value={formData.micr}
                onChange={handleChange}
              />
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
                TC Number
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder=""
                name="tcNumber"
                value={formData.tcNumber}
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
                TC Status
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select
                name="tcStatus"
                value={formData.tcStatus}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Issue"> Issue</option>
                <option value="Discontinue"> Discontinue</option>
                <option value="Terminal Class"> Terminal Class</option>
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
                TC Issue Date
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="date"
                name="tcIssueDate"
                value={formData.tcIssueDate}
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
                Photo of Student
              </Form.Label>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <Form.Control
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              {!selectedFile ? (
                <Row>
                  <Col>
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "#3474EB",
                        width: "100%",
                        border: "1px dashed #3474EB",
                      }}
                      onClick={handleFileClick}
                    >
                      Upload Image
                    </Button>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs="auto" className="d-flex align-items-center">
                    <span
                      className="me-1 mt-2"
                      style={{
                        wordBreak: "break-all",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "block",
                        color: "#3474EB",
                      }}
                    >
                      {selectedFile.name}
                    </span>
                    <Button
                      variant="link"
                      onClick={handleFileRemove}
                      className=" p-0  d-flex justify-content-center align-items-center mt-2"
                      style={{ width: "16px", height: "16px" }}
                    >
                      <img
                        className=""
                        src={trash}
                        alt="Delete"
                        style={{
                          width: "14px",
                          height: "14px",
                          cursor: "pointer",
                        }}
                      />
                    </Button>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-start align-items-center"></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default StudentUpdateclone;

import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Table, Form, Row, Col, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";

function AccountViewCashEnter({ open, onClose }) {
  const [formData, setFormData] = useState({
    date: "",
    narration: "",
    receiptPayment: "",
    transactionMode: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
  };
  return (
    <Modal
      show={open}
      onHide={onClose}
      size="xl"
      centered
      style={{ borderColor: "none", border: "none" }}
    >
      <Modal.Body>
      <div className="container-fluid p-3">
        <Form className="openingbalanceform roboto-font stylelabel">
          <Row className="justify-content-between align-items-center mt-2 mb-3">
            <Col xs={"auto"}>
              <span className="modalformheading">Cash Book Entry</span>
            </Col>
            <Col xs={"auto"}>
              <IoIosCloseCircleOutline
                size={32}
                className="modalformclosebtn"
                onClick={onClose}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={12} lg={6} className="d-flex flex-column justify-content-between">
              <Row>
                <Col>
                  <Form.Label column sm={12}>Date</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={6} className="d-flex flex-column justify-content-between">
              <Row>
                <Col>
                  <Form.Label column sm={12}>Narration</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="narration"
                    placeholder="Enter Narration"
                    value={formData.narration}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>

            <Col lg={6} className="d-flex flex-column justify-content-between">
              <Row>
                <Col>
                  <Form.Label column sm={12}>Receipt/Payment</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Select
                    name="receiptPayment"
                    value={formData.receiptPayment}
                    onChange={handleChange}
                  >
                    <option value="">Select any one</option>
                    <option value="receipt">Receipt</option>
                    <option value="payment">Payment</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={6} className="d-flex flex-column justify-content-between">
              <Row>
                <Col>
                  <Form.Label column sm={12}>Transaction Mode</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Select
                    name="transactionMode"
                    value={formData.transactionMode}
                    onChange={handleChange}
                  >
                    <option value="">Select Mode</option>
                    <option value="cash">Cash</option>
                    <option value="bank">Bank</option>
                    <option value="online">Online</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>

            <Col lg={6} className="d-flex flex-column justify-content-between">
              <Row>
                <Col>
                  <Form.Label column sm={12}>Amount</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="amount"
                    placeholder="Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-end align-items-center my-4 gy-2">
            <Col xs={"auto"}>
              <Button className="fw-600 modalformdiscardbtn" onClick={onClose}>
                Discard
              </Button>
            </Col>
            <Col xs={"auto"}>
              <Button className="fw-600 modalformsavebtn" onClick={handleSubmit}>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal.Body>

      <Modal.Body style={{ borderColor: "#3474EB" }}>
        <div className="p-3 ">
          <div
            style={{
              textAlign: "center",
              borderTop: "2px solid #3474EB",
              borderBottom: "2px solid #3474EB",
            }}
          >
            <h4 className="mt-3 mb-3">
              <b style={{ textAlign: "center", color: "#00A62F" }}>
                Closing Balance as on 25/10/2024
              </b>
            </h4>
          </div>

          <Row className=" mt-2 mb-3 ">
            <Col
              style={{
                textAlign: "start",
              }}
              className="mx-5"
            >
              <div>
                <h5>
                  <b className="title ">MAIN CASH BOOK BALANCE</b>
                </h5>
              </div>
              <div
                className="d-flex justify-content-start mt-4"
                style={{ textAlign: "center" }}
              >
                <div>
                  {" "}
                  <h5>
                    <b className="title">C/B CASH :</b>
                  </h5>
                </div>
                <div className="mx-4">
                  {" "}
                  <h5>
                    <b>599485.86</b>
                  </h5>
                </div>
              </div>
              <div
                className="d-flex justify-content-start"
                style={{ textAlign: "center" }}
              >
                <div>
                  {" "}
                  <h5>
                    <b className="title">C/B BANK :</b>
                  </h5>
                </div>
                <div className="mx-4">
                  {" "}
                  <h5>
                    <b>599485.86</b>
                  </h5>
                </div>
              </div>

              <div
                className="d-flex justify-content-start"
                style={{ textAlign: "center" }}
              >
                <div>
                  {" "}
                  <h5>
                    <b className="title">C/B DIO :</b>
                  </h5>
                </div>
                <div className="mx-4">
                  {" "}
                  <h5>
                    <b style={{ color: "red" }}>599485.86</b>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AccountViewCashEnter;

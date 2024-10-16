import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Request from "../Request";
import useAccountHeads from "../hooks/useAccountHeads";
import JournalEntryCashEntryDetailes from "../Pages/JournalEntryCashEntryDetailes";
import request from "../Request";
import JournalEntryCashEntryDetailessecond from "../Pages/JournalEntryCashEntryDetailessecond";

function Journaladd({ open, onClose, initialData }) {
  const getTodayDate = () => new Date().toISOString().split("T")[0];
  const initialValue = {
      rp: "",
      transactionMode: "",
      accountHead: "",
      subAccountHead: "",
      amount: "", // Keep as string for initial state
      diocesan: 0,
      narration: "",
      date: getTodayDate(),
    }
  const [formData, setFormData] = useState(initialValue);

  const { accountHeads, subAccountHeads } = useAccountHeads();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.date !== getTodayDate()) {
      newErrors.date = "The date must be today's date.";
    }
    if (!formData.accountHead) {
      newErrors.accountHead = "Account Head is required.";
    }
    if (!formData.rp) {
      newErrors.rp = "Receipt/Payment selection is required.";
    }
    if (formData.amount === "" || formData.amount <= 0) {
      newErrors.amount = "Amount must be a positive number.";
    }
    if (!formData.narration) {
      newErrors.narration = "Narration is required.";
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Convert the amount input to a number if it's the amount field
    const updatedValue = name === "amount" ? parseFloat(value) : value;

    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    console.log("Submitting form data:", formData);

    request.post("addJournalEntry", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        onClose(); // Close modal after successful submission
        setFormData(initialValue)
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        setErrors({ submit: "Error submitting form. Please try again." });
        if (err.response) {
          console.error("Server responded with:", err.response.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal show={open} onHide={onClose} size="xl" centered>
      <Modal.Body>
        <div className="container-fluid p-3">
          <Form
            className="openingbalanceform roboto-font stylelabel"
            onSubmit={handleSubmit}
          >
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
              <Col sm={12} lg={6}>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    disabled
                    readOnly
                  />
                  {errors.date && (
                    <div className="text-danger">{errors.date}</div>
                  )}
                </Form.Group>
              </Col>
              <Col sm={12} lg={6}>
                <Form.Group>
                  <Form.Label>Receipt/Payment</Form.Label>
                  <Form.Select
                    name="rp"
                    value={formData.rp}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="Receipt">Receipt</option>
                    <option value="Payment">Payment</option>
                  </Form.Select>
                  {errors.rp && <div className="text-danger">{errors.rp}</div>}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Account Head</Form.Label>
                  <Form.Select
                    name="accountHead"
                    value={formData.accountHead}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Account Head</option>
                    {accountHeads.map((accountHead, index) => (
                      <option key={index} value={accountHead}>
                        {accountHead}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.accountHead && (
                    <div className="text-danger">{errors.accountHead}</div>
                  )}
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Sub Account Head</Form.Label>
                  <Form.Select
                    name="subAccountHead"
                    value={formData.subAccountHead}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Sub Account Head</option>
                    {subAccountHeads.map((subAccountHead, index) => (
                      <option key={index} value={subAccountHead}>
                        {subAccountHead}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Transaction Mode</Form.Label>
                  <Form.Select
                    name="transactionMode"
                    value={formData.transactionMode}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Transaction Mode</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank">Bank</option>
                    <option value="diocesan">diocesan</option>

                  </Form.Select>
                  {errors.transactionMode && (
                    <div className="text-danger">{errors.transactionMode}</div>
                  )}
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />
                  {errors.amount && (
                    <div className="text-danger">{errors.amount}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Narration</Form.Label>
                  <Form.Control
                    type="text"
                    name="narration"
                    value={formData.narration}
                    onChange={handleInputChange}
                  />
                  {errors.narration && (
                    <div className="text-danger">{errors.narration}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-end align-items-center my-4 gy-2">
              <Col xs={"auto"}>
                <Button
                  className="fw-600 modalformdiscardbtn"
                  onClick={onClose}
                >
                  Discard
                </Button>
              </Col>
              <Col xs={"auto"}>
                <Button
                  className="fw-600 modalformsavebtn"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <Spinner animation="border" size="sm" /> : "Save"}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <Modal.Body
          style={{ borderColor: "#3474EB", borderTop: "2px solid #3474EB" }}
        >
          <Row className="mt-2 mb-3">
            <Col
              style={{
                textAlign: "start",
              }}
              className="mx-5"
            >
              <JournalEntryCashEntryDetailes />
            </Col>
            <Col className="mx-5" style={{ textAlign: "start" }}>
              <JournalEntryCashEntryDetailessecond accountHead={formData?.accountHead}/>
            </Col>
          </Row>
        </Modal.Body>
      </Modal.Body>
    </Modal>
  );
}


export default Journaladd
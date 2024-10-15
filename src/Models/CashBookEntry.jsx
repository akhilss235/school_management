import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import useAccountHeads from '../hooks/useAccountHeads'; // Adjust the import path
import request from "../Request";

function CashBookEntry({ open, onClose, initialData }) {
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
  };

  const [formData, setFormData] = useState({
    accountHead: "",
    subAccountHead: "",
    cash: 0,
    bank: 0,
    diocesan: 0,
    date: getTodayDate(),
  });

  const { accountHeads, subAccountHeads } = useAccountHeads();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      setFormData({
        accountHead: initialData?.accountHead || "",
        subAccountHead: initialData?.subAccountHead || "",
        cash: initialData?.cash || 0,
        bank: initialData?.bank || 0,
        diocesan: initialData?.diocesan || 0,
        date: initialData?.date || getTodayDate(),
      });
      setErrors({});
    }
  }, [open, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name.includes('Amount') ? Number(value) : value, // Convert to number for amount fields
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (formData.date !== getTodayDate()) {
      newErrors.date = "The date must be today's date.";
    }
    if (!formData.accountHead) newErrors.accountHead = "Account Head is required.";
    return newErrors;
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

    const payload = {
      ...formData,
      cash: Number(formData.cash),
      bank: Number(formData.bank),
      diocesan: Number(formData.diocesan),
    };

    request.post("addOpeningBalance", payload)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        onClose();
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        setErrors({ submit: "Error submitting form. Please try again." });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal show={open} onHide={onClose} size="xl" centered>
      <Modal.Body>
        <div className="container-fluid p-3">
          <Form className='openingbalanceform roboto-font stylelabel' onSubmit={handleSubmit}>
            <Row className='justify-content-between align-items-center mt-2 mb-3'>
              <Col xs={'auto'}>
                <span className='modalformheading'>Cash Book Entry</span>
              </Col>
              <Col xs={'auto'}>
                <IoIosCloseCircleOutline size={32} className='modalformclosebtn' onClick={onClose}/>
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
                  {errors.date && <div className="text-danger">{errors.date}</div>}
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
                  {errors.accountHead && <div className="text-danger">{errors.accountHead}</div>}
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
              {["cash", "bank", "diocesan"].map((field, index) => (
                <Col lg={4} key={index}>
                  <Form.Group>
                    <Form.Label>{field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</Form.Label>
                    <Form.Control
                      type="number"
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                    />
                  </Form.Group>
                </Col>
              ))}
            </Row>

            <Row className='justify-content-end align-items-center my-4 gy-2'>
              <Col xs={'auto'}>
                <Button className='fw-600 modalformdiscardbtn' onClick={onClose}>
                  Discard
                </Button>
              </Col>
              <Col xs={'auto'}>
                <Button className='fw-600 modalformsavebtn' type="submit" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Save"}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CashBookEntry;

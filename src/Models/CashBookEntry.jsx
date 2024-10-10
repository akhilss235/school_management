import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal,  Form, Row, Col, Button , Spinner, Alert } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Request from "../Request"; // Adjust the path as necessary
import useAccountHeads from '../hooks/useAccountHeads'; // Adjust the import path


function CashBookEntry({ open, onClose }) {
  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  
  const [formData, setFormData] = useState({
    accountHead: "",
    subAccountHead: "",
    cashAmount: "",
    bankAmount: "",
    diocesanAmount: "",
    date: getTodayDate()
  });
  const { accountHeads, subAccountHeads } = useAccountHeads();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Initialize an errors object

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: null })); // Clear error for that field

  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    // Check if the date is not equal to today's date
    if (formData.date !== getTodayDate()) {
      newErrors.date = "The date must be today's date.";
  }
    if (!formData.accountHead) newErrors.accountHead = "Account Head is required.";
    return newErrors;
  };

  // Handle form submission using .then and .catch
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Reset errors before validation

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return; // Stop submission if there are validation errors
    }

    Request.post("addOpeningBalance", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        onClose();
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        setErrors({ submit: "Error submitting form. Please try again." }); // Set a general error
      })
      .finally(() => {
        setLoading(false);
      });
  };
//  className='d-flex flex-column justify-content-between'
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
                onChange={handleInputChange}
                disabled
                readOnly
                />
                {errors.date && <div className="text-danger">{errors.date}</div>}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col>
                <Form.Label column sm={12}>Account Head</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
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
              </Col>
              
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col>
                <Form.Label column sm={12}>Sub Account Head</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  name="subAccountHead"
                  value={formData.subAccountHead}
                  onChange={handleInputChange}
                  >
                  <option value="">Select Sub Account Head</option>
                  {subAccountHeads.map((accountHead, index) => (
                    <option key={index} value={accountHead}>
                      {accountHead}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Row>
              <Col>
                <Form.Label column sm={12}>Cash Amount</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="text" 
                    name="cashAmount"
                    value={formData.cashAmount}
                    onChange={handleInputChange}
                    placeholder="Enter cash amount"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
              <Col>
                <Form.Label column sm={12}>Bank Amount</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="text" 
                    name="bankAmount"
                    value={formData.bankAmount}
                    onChange={handleInputChange}
                    placeholder="Enter bank amount"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
              <Col>
                <Form.Label column sm={12}>Diocesan Amount</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="text" 
                    name="diocesanAmount"
                    value={formData.diocesanAmount}
                    onChange={handleInputChange}
                    placeholder="Enter diocesan amount"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='justify-content-end align-items-center my-4 gy-2'>
          <Col xs={'auto'}>
            <Button className='fw-600 modalformdiscardbtn' onClick={onClose}>
              Discard
            </Button>
          </Col>
          <Col xs={'auto'}>
            <Button className='fw-600 modalformsavebtn'
            type="submit"
            disabled={loading}
            
            >
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

import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Table, Form, Row, Col, Button,Spinner } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import request from "../Request"; // Adjust the path as necessary
import useAccountHeads from '../hooks/useAccountHeads'; // Adjust the import path

function VoucherCashEnter({ open, onClose }) {
  const { accountHeads, subAccountHeads } = useAccountHeads();
  const [formData, setFormData] = useState({
    accountHead: "",
    remarks: "",
    cash: 0,
    bank: 0,
    voucherNo: 0,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "cash" || name === "bank" || name === "voucherNo"
        ? value === "" ? "" : Number(value)  // Allow empty string, otherwise convert to number
        : value,  // For other fields, keep as string
    }));
    
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.accountHead) newErrors.accountHead = "Account Head is required.";
    if (isNaN(formData.cash) || formData.cash < 0) newErrors.cash = "Cash must be a positive number.";
    if (isNaN(formData.bank) || formData.bank < 0) newErrors.bank = "Bank must be a positive number.";
    if (isNaN(formData.voucherNo) || formData.voucherNo < 0) newErrors.voucherNo = "Voucher Number must be a positive number.";

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


    request.post("addVoucher", formData)
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
      <Form className='openingbalanceform roboto-font stylelabel styleinput' onSubmit={handleSubmit}>
        <Row className='justify-content-between align-items-center mt-2 mb-3'>
          <Col xs={'auto'}>
            <span className='modalformheading'>Voucher Number Form</span>
          </Col>
          <Col xs={'auto'}>
            <IoIosCloseCircleOutline size={32} className='modalformclosebtn'  onClick={onClose}/>
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
                <Form.Label column sm={12}>Remarks</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="text" 
                    placeholder="" 
                    className=""
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}

                />
                {errors.remarks && <div className="text-danger">{errors.remarks}</div>}
              </Col>
            </Row>
          </Col>

        </Row>

        <Row>
          <Col lg={6}>
            <Row>
              <Col>
                <Form.Label column sm={12}>Cash</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="number" 
                    placeholder="" 
                    className=""
                    name="cash"
                    value={formData.cash}
                    onChange={handleInputChange}

                />
                {errors.cash && <div className="text-danger">{errors.cash}</div>}
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col>
                <Form.Label column sm={12}>Bank</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="number" 
                    placeholder="" 
                    className=""
                    name="bank"
                    value={formData.bank}
                    onChange={handleInputChange}

                />
                {errors.bank && <div className="text-danger">{errors.bank}</div>}

              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col>
                <Form.Label column sm={12}>Voucher Number</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="number" 
                    placeholder="" 
                    className=""
                    name="voucherNo"
                    value={formData.voucherNo}
                    onChange={handleInputChange}

                />
                {errors.voucherNo && <div className="text-danger">{errors.voucherNo}</div>}

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

export default VoucherCashEnter;

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import request from "../Request"; // Adjust the path as necessary

function AccountMasterEntry({ open, onClose }) {
  const [accountHead, setAccountHead] = useState("");
  const [subAccountHead, setSubAccountHead] = useState("");
  const [errors, setErrors] = useState({ accountHead: "", subAccountHead: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ accountHead: "", subAccountHead: "" });

    // Input validation
    let isValid = true;
    if (!accountHead) {
      setErrors((prev) => ({ ...prev, accountHead: "Account Head is required." }));
      isValid = false;
    }
    if (!subAccountHead) {
      setErrors((prev) => ({ ...prev, subAccountHead: "Sub Account Head is required." }));
      isValid = false;
    }

    if (!isValid) return; // Stop submission if there are errors

    const data = {
      accountHead,
      subAccountHead,
    };

    try {
      const response = await request.post("addAccountMaster/", data); // Replace with your actual endpoint
      console.log("Success:", response.data);
      // Optionally close the modal or reset the form
      onClose();
    } catch (error) {
      console.error("Error:", error);
      // Handle error appropriately
    }
  };

  return (
    <Modal show={open} onHide={onClose} size="lg" centered>
      <Modal.Body>
        <div className="container-fluid p-3">
          <Form className="roboto-font stylelabel styleinput" onSubmit={handleSubmit}>
            <Row className="justify-content-between align-items-center mt-2 mb-3">
              <Col xs={"auto"}>
                <span className="modalformheading">New Account Head</span>
              </Col>
              <Col xs={"auto"}>
                <IoIosCloseCircleOutline size={32} className="modalformclosebtn" onClick={onClose} />
              </Col>
            </Row>

            <Row>
              <Col className="d-flex flex-column justify-content-between">
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Account Head</Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      value={accountHead}
                      onChange={(e) => setAccountHead(e.target.value)}
                      placeholder=""
                    />
                  </Col>
                  {errors.accountHead && <div className="text-danger">{errors.accountHead}</div>}

                </Row>
              </Col>
            </Row>

            <Row>
              <Col className="d-flex flex-column justify-content-between">
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Sub Account Head</Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      value={subAccountHead}
                      onChange={(e) => setSubAccountHead(e.target.value)}
                      placeholder=""
                    />
                                      {errors.subAccountHead && <div className="text-danger">{errors.subAccountHead}</div>}

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
                <Button type="submit" className="fw-600 modalformsavebtn">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AccountMasterEntry;

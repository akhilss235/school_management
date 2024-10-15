import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Table, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";

function JournalEntryUpdate({ open, onClose }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSave = () => {
    // Logic to save the entry
    // Assuming the save operation is successful
    setShowSuccessMessage(true);

    // Optionally, you can close the modal after a timeout
    setTimeout(() => {
      setShowSuccessMessage(false);
      onClose(); // Close the modal if needed
    }, 2000);
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

            {/* Success Message */}
            {showSuccessMessage && (
              <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
                Entry updated successfully!
              </Alert>
            )}

            {/* Your existing form fields */}
            <Row>
              <Col sm={12} lg={6} className="d-flex flex-column justify-content-between">
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Date</Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control type="date" />
                  </Col>
                </Row>
              </Col>
              <Col lg={6} className="d-flex flex-column justify-content-between">
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Receipt/payment</Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Select>
                      <option>Select any one</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Other form fields here... */}

            <Row className="justify-content-end align-items-center my-4 gy-2">
              <Col xs={"auto"}>
                <Button className="fw-600 modalformdiscardbtn" onClick={onClose}>
                  Discard
                </Button>
              </Col>
              <Col xs={"auto"}>
                <Button className="fw-600 modalformsavebtn" onClick={handleSave}>
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>

      {/* Main Cash Book Balance Section */}
      <Modal.Body style={{ borderColor: "#3474EB", borderTop: '2px solid #3474EB' }}>
        <div className="p-3">
          <Row className="mt-2 mb-3">
            {/* Your cash book balance information here... */}
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default JournalEntryUpdate;

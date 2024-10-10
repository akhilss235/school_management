import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button} from 'react-bootstrap';
import { IoIosCloseCircleOutline } from "react-icons/io";

function AccountMasterEntry({ open, onClose }) {
  const [inputValue, setInputValue] = useState("");
  const [subAccountHeads, setSubAccountHeads] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle pressing "Enter"
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // Prevent form submission on Enter
      addSubAccountHead();
    }
  };

  // Add Sub Account Head to the list
  const addSubAccountHead = () => {
    setSubAccountHeads([...subAccountHeads, inputValue.trim()]);
    setInputValue(""); // Clear the input field
  };

  // Remove a Sub Account Head
  const removeSubAccountHead = (indexToRemove) => {
    setSubAccountHeads(subAccountHeads.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Modal show={open} onHide={onClose} size="lg" centered>

      <Modal.Body>
      <div className="container-fluid p-3">
      <Form className='roboto-font stylelabel styleinput'>
        <Row className='justify-content-between align-items-center mt-2 mb-3'>
          <Col xs={'auto'}>
            <span className='modalformheading'>New Account Head</span>
          </Col>
          <Col xs={'auto'}>
            <IoIosCloseCircleOutline size={32} className='modalformclosebtn' onClick={onClose}/>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Account Head</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="text" 
                    placeholder="" 
                    className=""
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Sub Account Head</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                    type="text" 
                    placeholder="" 
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
              </Col>
            </Row>
            <Row>
              <Col className='py-2'>
                  {subAccountHeads.map((subAccount, index) => (
                    <div className='mt-3 me-3' key={index} style={{ display: "inline-block"}}>
                      <button
                        type="button"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "5px",
                          backgroundColor: "#ECF3FF",
                          color:'#3474EB',
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        {subAccount}
                        <IoIosCloseCircleOutline
                        size={18}
                          style={{
                            marginLeft: "5px",
                            color: "red",
                            cursor: "pointer",
                          }}
                          onClick={() => removeSubAccountHead(index)}
                        />
                      </button>
                    </div>
                  ))}
              
              </Col>
            </Row>

          </Col>
        </Row>

        <Row className='justify-content-end align-items-center my-4 gy-2'>
          <Col xs={'auto'}>
            <Button className='fw-600 modalformdiscardbtn'>
              Discard
            </Button>
          </Col>
          <Col xs={'auto'}>
            <Button className='fw-600 modalformsavebtn'>
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




export default AccountMasterEntry
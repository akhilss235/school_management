import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Table, Form, Row, Col, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import JournalEntryUpdate from "../Models/JournalEntryUpdate";
import { InputGroup} from 'react-bootstrap';
import { AiFillEyeInvisible,AiFillEye  } from "react-icons/ai";

function AdminPower({ open, onClose }) {
    const [modalJournalEntryCashEntry, setModalJournalEntryCashEntry] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    const inputStyle = {
      backgroundColor: 'white !important', // Change this to your desired background color
      borderRight: 'none',
    };
  
    const iconStyle = {
      cursor: 'pointer',
      backgroundColor: 'white !important', // Same background color for consistency
      borderLeft: 'none',
    };
  
  return (
    <>
    <Modal show={open} onHide={onClose} size="md" centered>
      {/* <Modal.Header closeButton>
        <Modal.Title>AdminPower</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
      <div className="container-fluid p-3">
      <Form className='adminpowerform roboto-font stylelabel'>
        <Row className='justify-content-between align-items-center mt-2 mb-2'>
          <Col xs={'auto'}>
            <span className='modalformheading'>Admin Power</span>
          </Col>
        </Row>
        <Row>
          <Col className='text-break'>
            <p style={{color:'#898989'}}>Authorization is required to edit the informations.</p>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Enter Admin Password</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col className='inputpasswordeye'>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    style={inputStyle} // Apply custom styles here
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility}>
                    {showPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible  size={20}/>}
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='justify-content-end align-items-center my-4 gy-2'>
          <Col xs={'auto'}>
            <Button className='fw-600 modalformdiscardbtn'>
              Cancel
            </Button>
          </Col>
          <Col xs={'auto'}>
            <Button className='fw-600 modalformsavebtn'>
              Verify
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
      </Modal.Body>

    </Modal>
    <JournalEntryUpdate
        open={modalJournalEntryCashEntry}
        onClose={() => setModalJournalEntryCashEntry(false)}
      />
    </>

  );
}


export default AdminPower
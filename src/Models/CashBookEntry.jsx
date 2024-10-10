import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal,  Form, Row, Col, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";


function CashBookEntry({ open, onClose }) {
  return (
    <Modal show={open} onHide={onClose} size="xl" centered>

      <Modal.Body>
      <div className="container-fluid p-3">
      <Form className='openingbalanceform roboto-font stylelabel'>
        <Row className='justify-content-between align-items-center mt-2 mb-3'>
          <Col xs={'auto'}>
            <span className='modalformheading'>Cash Book Entry</span>
          </Col>
          <Col xs={'auto'}>
            <IoIosCloseCircleOutline size={32} className='modalformclosebtn' onClick={onClose}/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={6} className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Date</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                type="date"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Gender</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select 
                >
                  <option>CATHEDRAL NURSERY AND PRIMARY</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Gender</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select 
                >
                  <option>BANK DEPOSIST</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Cash Amount</Form.Label>
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
          <Col lg={4} className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Bank Amount</Form.Label>
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
          <Col lg={4} className='d-flex flex-column justify-content-between'>
            <Row>
              <Col>
                <Form.Label column sm={12}>Diocesan Amount</Form.Label>
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

export default CashBookEntry;

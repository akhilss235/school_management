import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Table, Form, Row, Col, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";


function JournalEntryDetailes({ open, onClose }) {
  return (
    <Modal show={open} onHide={onClose} size="lg" centered>

      <Modal.Body>
      <div className="container-fluid p-3">
      <div className='openingbalanceform roboto-font detailsdiv'>
        <Row className='justify-content-end align-items-center mt-2 mb-3'>
          <Col xs={'auto'}>
            <IoIosCloseCircleOutline size={32} className='modalformclosebtn' onClick={onClose}/>
          </Col>
        </Row>
        <Row>
          <Col className='text-break'>
            <Row className='mb-2'>
              <Col sm={6}>
                <p className='detailslabel'>Date</p>
              </Col>
              <Col sm={6}>
                <p className='detailsvalue'>15/11/2023</p>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col sm={6}>
                <p className='detailslabel'>Receipt/Payment</p>
              </Col>
              <Col sm={6}>
                <p className='detailsvalue'>Receipt</p>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col sm={6}>
                <p className='detailslabel'>Transaction Mode</p>
              </Col>
              <Col sm={6}>
                <p className='detailsvalue'>Cash</p>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col sm={6}>
                <p className='detailslabel'>Account Head</p>
              </Col>
              <Col sm={6}>
                <p className='detailsvalue'>CATHEDRAL NURSERY AND PRIMARY</p>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col sm={6}>
                <p className='detailslabel'>Sub Account Head</p>
              </Col>
              <Col sm={6}>
                <p className='detailsvalue'>BANK DEPOSIT</p>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col sm={6}>
                <p className='detailslabel'>Amount</p>
              </Col>
              <Col sm={6}>
                <p className='detailsvalue'>₹ 2,500</p>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col sm={6}>
                <p className='detailslabel'>Narration</p>
              </Col>
              <Col sm={6}>
                <p className='detailsvalue'>Lorem ipsum dolor sit amet, consectetur..</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
      </Modal.Body>

    </Modal>
  );
}


export default JournalEntryDetailes
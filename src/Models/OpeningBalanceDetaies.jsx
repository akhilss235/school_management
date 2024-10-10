import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";


function OpeningBalanceDetaies({ open, onClose }) {
  return (
    <Modal show={open} onHide={onClose} size="md" centered>
      <Modal.Body>
  
      <Row className="justify-content-between align-items-center mt-2 mb-3">
              <Col xs={"auto"}>
                <h4><b style={{color:'#00A62F'}}>Date: 07/10/2024</b>   </h4>
              </Col>
              <Col xs={"auto"}>
                <IoIosCloseCircleOutline
                  size={32}
                  className="modalformclosebtn"
                  onClick={onClose}
                />
              </Col>
            </Row>
            <div style={{ textAlign: "start" }}>
                <h5>
                  <b className="title">CATHEDRAL NURSERY AND PRIMARY</b>
                </h5>
              </div>

              <div
                className="d-flex justify-content-strat mt-4"
                style={{ textAlign: "center" }}
              >
                <div>
                  {" "}
                  <h5>
                    <b className="title">C/B CASH :</b>
                  </h5>
                </div>
                <div className="mx-4">
                  {" "}
                  <h5>
                    <b>599485.86</b>
                  </h5>
                </div>
              </div>
              <div
                className="d-flex justify-content-start"
                style={{ textAlign: "center" }}
              >
                <div>
                  {" "}
                  <h5>
                    <b className="title">C/B BANK :</b>
                  </h5>
                </div>
                <div className="mx-4">
                  {" "}
                  <h5>
                    <b>599485.86</b>
                  </h5>
                </div>
              </div>

              <div
                className="d-flex justify-content-start"
                style={{ textAlign: "center" }}
              >
                <div>
                  {" "}
                  <h5>
                    <b className="title">C/B DIO :</b>
                  </h5>
                </div>
                <div className="mx-4">
                  {" "}
                  <h5>
                    <b>599485.86</b>
                  </h5>
                </div>
              </div>


            </Modal.Body>
     
    </Modal>
  );
}

export default OpeningBalanceDetaies;

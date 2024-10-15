import React from 'react'
import { Modal, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { useDashboard } from "../hooks/useDashboard";
import { useCommon } from "../hooks/useCommon";
function JournalEntryCashEntryDetailes() {





  return (
    <div>
        <div className="p-3">
          <Row className="mt-2 mb-3">
            <Col className="mx-5" style={{ textAlign: "start", borderRight: "2px solid #3474EB" }}>
              <h5><b className="title">MAIN CASH BOOK BALANCE</b></h5>
              <div className="d-flex justify-content-start mt-4" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B CASH :</b></h5>
                <h5 className="mx-4"><b>599485.86</b></h5>
              </div>
              <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B BANK :</b></h5>
                <h5 className="mx-4"><b>599485.86</b></h5>
              </div>
              <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B DIO :</b></h5>
                <h5 className="mx-4"><b style={{ color: "red" }}>599485.86</b></h5>
              </div>
            </Col>






            <Col className="mx-5" style={{ textAlign: "start" }}>
              <h5><b className="title">CATHEDRAL NURSERY AND PRIMARY</b></h5>
              <div className="d-flex justify-content-start mt-4" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B CASH :</b></h5>
                <h5 className="mx-4"><b>599485.86</b></h5>
              </div>
              <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B BANK :</b></h5>
                <h5 className="mx-4"><b>599485.86</b></h5>
              </div>
              <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
                <h5><b className="title">C/B DIO :</b></h5>
                <h5 className="mx-4"><b>599485.86</b></h5>
              </div>
            </Col>
          </Row>
        </div>  
    </div>
  )
}

export default JournalEntryCashEntryDetailes
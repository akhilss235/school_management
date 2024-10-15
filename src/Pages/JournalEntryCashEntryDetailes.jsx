import React, { useEffect } from "react";
import { Modal, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { useDashboard } from "../hooks/useDashboard";
import { useCommon } from "../hooks/useCommon";

function JournalEntryCashEntryDetailes() {

  const {dashBoard, handleFetchDashboardData} = useDashboard()
  const {getAmountWithCommas} = useCommon()
  useEffect(()=>{
      handleFetchDashboardData()
  },[])
  const mainBalanceDetails = [
    {
        id:1,
        title:"C/B CASH:",
        apiTitle:"totalCash",
    },
    {
        id:2,
        title:"C/B BANK:",
        apiTitle:"totalBank",
    },
    {
        id:3,
        title:"C/B DIOCESAN:",
        apiTitle:"totalDiocesan",
    },
]

  return (
    <div>
        <div className="p-3">

          <Row className="mt-2 mb-3">
          <Col
            style={{
              textAlign: "start",
            }}
            className="mx-5"
          >
            <div style={{marginBottom:"1rem"}}>
              <h5>
                <b className="title ">MAIN CASH BOOK BALANCE</b>
              </h5>
            </div>
            {
                mainBalanceDetails.map((item) => (
                    <div
                    className="d-flex justify-content-start gap-1"
                    style={{ textAlign: "center", gap:"8px" }}
                    key={item.id}
                    >
                        <div>
                            {" "}
                            <h5>
                            <b className="title">{item.title}</b>
                            </h5>
                        </div>
                        <div className="mx-4">
                            {" "}
                            <h5>
                            <b style={{color: dashBoard[0]?.[item?.apiTitle] < 0 ? "red" : ""}}>₹ {getAmountWithCommas(dashBoard[0]?.[item?.apiTitle] || 0)}</b>
                            </h5>
                        </div>
                    </div>
                ))
            }
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
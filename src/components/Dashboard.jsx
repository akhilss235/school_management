import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardTable from "../Pages/DashboardTable";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CashAmount from "../img/CashAmount.png";
import Card from "react-bootstrap/Card";
import CashAmount2 from "../img/CashAmount2.png";
import BankAmount from "../img/BankAmount.png";
import BankAmount2 from "../img/BankAmount2.png";
import DiocesanAmount from "../img/DiocesanAmount.png";
import DiocesanAmount2 from "../img/DiocesanAmount2.png";

function Dashboard() {
  return (
    <>
      <div>
        <div className="p-3">
          <h4>
            <b className="title">Opening Balance Entry</b>
          </h4>
        </div>

        <Row className="p-3">
          <Col>
            <Card
              style={{
                backgroundColor: "#E0F9FC",
                borderRadius: "30px",
                height: "13rem",
              }}
            >
              <div className="d-flex pt-3 px-3">
                <div>
                  <img src={CashAmount} alt="Cash Amount" />
                </div>
                <div className="mx-4">
                  <h1 className=" d-flex">
                    <b className="CashAmount"> ₹ 2,23,500</b>
                  </h1>
                  <p style={{ color: "#9F9F9F" }}>Cash Amount</p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <img
                  src={CashAmount2}
                  alt="Cash Amount"
                  style={{ background: "cover", height: "100%" }}
                />
              </div>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                backgroundColor: "#FCEAEB",
                borderRadius: "30px",
                height: "13rem",
              }}
            >
              <div className="d-flex pt-3 px-3">
                <div>
                  <img src={BankAmount} alt="Cash Amount" />
                </div>
                <div className="mx-4">
                  <h1 className=" d-flex">
                    <b className="CashAmount"> ₹ 2,23,500</b>
                  </h1>
                  <p style={{ color: "#9F9F9F" }}>Bank Amount</p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <img
                  src={BankAmount2}
                  alt="Cash Amount"
                  style={{ background: "cover", height: "100%" }}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                backgroundColor: "#E6F7EE",
                borderRadius: "30px",
                height: "13rem",
              }}
            >
              <div className="d-flex pt-3 px-3">
                <div>
                  <img src={DiocesanAmount} alt="Cash Amount" />
                </div>
                <div className="mx-4">
                  <h1 className=" d-flex">
                    <b className="CashAmount"> ₹ 2,23,500</b>
                  </h1>
                  <p style={{ color: "#9F9F9F" }}>Diocesan Amount</p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <img
                  src={DiocesanAmount2}
                  alt="Cash Amount"
                  style={{ background: "cover", height: "100%" }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <DashboardTable />
    </>
  );
}

export default Dashboard;

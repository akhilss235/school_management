import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { RiDeleteBinLine } from "react-icons/ri";

function UserAccessnewDetailes() {
  return (
    <>
      <div style={{ backgroundColor: "#FFFFFF" }} className="p-3 detailsdiv">
        <div className="d-flex justify-content-between">
          <div>
            <h4>
              <b className="title">User</b>
            </h4>
          </div>

          <div className="d-flex">
            <p className="DeleteUser">
              <RiDeleteBinLine /> Delete User
            </p>
          </div>
        </div>
        <Row className="mt-4 mb-2">
          <Col  lg={2}>
            <p className="detailslabel text-break">label</p>
          </Col>
          <Col  lg={8}>
            <p className="detailsvalue text-break">value</p>
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col  lg={2}>
            <p className="detailslabel text-break">label</p>
          </Col>
          <Col  lg={8}>
            <p className="detailsvalue text-break">value</p>
          </Col>
        </Row>
      </div>

      <div style={{ backgroundColor: "#FFFFFF" }} className="p-3 mt-3">
        <Row className="mt-4 mb-4">
          <Col>
            <Form.Label>
              <b>Access To</b>
            </Form.Label>
            <div className="d-flex flex-wrap ">
              {[
                "Students",
                "Transaction",
                "Account View",
                "Reports",
                "Account Master",
              ].map((item, index) => (
                <div className="checkbox-wrapper-28 me-5 " key={index}>
                  <input
                    id={`checkbox-${index}`}
                    type="checkbox"
                    className="promoted-input-checkbox"
                  />
                  <svg>
                    <use xlinkHref="#checkmark-28" />
                  </svg>
                  <label htmlFor={`checkbox-${index}`}>
                    <b style={{ color: "#505050" }}>{item}</b>
                  </label>
                </div>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol id="checkmark-28" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    fill="none"
                    d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                  />
                </symbol>
              </svg>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-end">
        <div>
          <a href="/UserAccess" style={{ textDecoration: "none" }}>
            <Button
              className="Discard "
              style={{ height: "35px", width: "auto", borderColor: "#FFFFFF" }}
            >
              <span style={{ fontSize: "auto" }}>Discard</span>
            </Button>
          </a>
        </div>
        <div className="mx-3">
          <Button
            className="addbuttons"
            style={{ height: "35px", width: "auto" }}
          >
            <span style={{ fontSize: "auto" }}>Set Access</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserAccessnewDetailes;

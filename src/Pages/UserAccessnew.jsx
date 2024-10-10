import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function UserAccessnew() {
  return (
    <>
      <Form>
        <div style={{ backgroundColor: "#FFFFFF" }} className="p-3">
          <div>
            <h4>
              <b className="title">New User</b>
            </h4>
          </div>

          <Row className="mt-4 mb-4">
            <Col>
              <Form.Label>
                {" "}
                <b>Name</b>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter the name" />
            </Col>
            <Col>
              <Form.Label>
                {" "}
                <b>Phone Number</b>
              </Form.Label>

              <Form.Control
                type="number"
                placeholder="Enter the phone number"
              />
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col>
              <Form.Label>
                {" "}
                <b>User Name</b>
              </Form.Label>

              <Form.Control type="text" placeholder="Enter the user name" />
            </Col>
            <Col>
              <Form.Label>
                {" "}
                <b>Set Password</b>
              </Form.Label>

              <Form.Control type="Password" placeholder="Enter the password" />
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
                style={{ height: "35px", width: "auto",borderColor:'#FFFFFF' }}
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
      </Form>
    </>
  );
}

export default UserAccessnew;

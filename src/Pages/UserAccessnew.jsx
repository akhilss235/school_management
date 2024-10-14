import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import request from "../Request";

function UserAccessnew() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    userName: '',
    password: '',
    accessTo: {
      isStudent: false,
      isTransaction: false,
      isAccountView: false,
      isReports: false,
      isAccountMaster: false,
    },
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        accessTo: {
          ...prevState.accessTo,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await request.post('addUser/', JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log("User access set successfully");
      } else {
        console.error("Error setting user access:", response.data);
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server responded with error:", error.response.data);
      } else {
        // The request was made but no response was received
        console.error("Network error:", error.message);
      }
    }
  };
  
  
  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ backgroundColor: "#FFFFFF" }} className="p-3">
        <div>
          <h4><b className="title">New User</b></h4>
        </div>

        <Row className="mt-4 mb-4">
          <Col>
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter the name" 
              name="name"
              value={formData.name}
              onChange={handleChange} 
            />
          </Col>
          <Col>
            <Form.Label><b>Phone Number</b></Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Enter the phone number" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange} 
            />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <Form.Label><b>User Name</b></Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter the user name" 
              name="userName"
              value={formData.userName}
              onChange={handleChange} 
            />
          </Col>
          <Col>
            <Form.Label><b>Set Password</b></Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter the password" 
              name="password"
              value={formData.password}
              onChange={handleChange} 
            />
          </Col>
        </Row>
      </div>

      <div style={{ backgroundColor: "#FFFFFF" }} className="p-3 mt-3">
        <Row className="mt-4 mb-4">
          <Col>
            <Form.Label><b>Access To</b></Form.Label>
            <div className="d-flex flex-wrap">
              {Object.keys(formData.accessTo).map((key, index) => (
                <div className="checkbox-wrapper-28 me-5" key={index}>
                  <input
                    id={`checkbox-${index}`}
                    type="checkbox"
                    name={key}
                    checked={formData.accessTo[key]}
                    onChange={handleChange}
                    className="promoted-input-checkbox"
                  />
                  <svg>
                    <use xlinkHref="#checkmark-28" />
                  </svg>
                  <label htmlFor={`checkbox-${index}`}>
                    <b style={{ color: "#505050" }}>{key.replace(/is/, '')}</b>
                  </label>
                </div>
              ))}
              <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
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
              className="Discard"
              style={{ height: "35px", width: "auto", borderColor: '#FFFFFF' }}
            >
              <span style={{ fontSize: "auto" }}>Discard</span>
            </Button>
          </a>
        </div>
        <div className="mx-3">
          <Button
            className="addbuttons"
            type="submit"
            style={{ height: "35px", width: "auto" }}
          >
            <span style={{ fontSize: "auto" }}>Set Access</span>
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default UserAccessnew;

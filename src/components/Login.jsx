import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "../Styles/Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="containers p-3">
        <h2 className="mt-4" style={{color:'#505050'}}>LOG IN</h2>
        <Form className="input-section ">
          <div className="mb-3 mt-3">
            <Form.Control
              type="text"
              placeholder=" Username"
              id="Username"
              name="Username"
              className=" p-3"
            />
          </div>
      
          <div className="mb-3 mt-4">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              autoComplete="current-password"
              className=" p-3"
            />
          </div>
          <Button className="LOGINBTN p-3 mt-4" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Styles/Login.css";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { formData, handleSubmit, onChange, errors } = useLogin();
    return (
        <div className="Login">
            <div className="containers p-3">
                <h2 className="mt-4" style={{ color: '#505050' }}>LOG IN</h2>
                <Form className="input-section" >
                    <div className="mb-3 mt-3">
                        <Form.Control
                            type="text"
                            placeholder=" Username"
                            id="Username"
                            name="userName"
                            value={formData?.userName}
                            onChange={onChange}
                            className="p-3 mb-1"
                        />
                        {errors.userName && <p className="errors" style={{color:"red"}}>Username is required</p>}
                    </div>

                    <div className="mb-3 mt-4">
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            name="password"
                            value={formData?.password}
                            onChange={onChange}
                            autoComplete="current-password"
                            className="p-3 mb-1"
                        />
                        {errors.password && <p className="errors" style={{color:"red"}}>Password is required</p>}
                    </div>
                    {errors.form &&  <p className="errors" style={{color:"red"}}>{errors.form}</p>}
                    <Button className="LOGINBTN p-3 mt-4" type="submit" onClick={(e)=>handleSubmit(e)}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;

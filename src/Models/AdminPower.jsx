import React, { useState } from "react";
import { Modal, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import request from "../Request"; 

function AdminPower({ open, onClose, selectedEntry, onUpdate }) {
    const [adminPassword, setAdminPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleVerify = async () => {
        if (!adminPassword) {
            alert("Please enter your password.");
            return;
        }

        setLoading(true);
        try {
            const response = await request.post('checkAdmin', { password: adminPassword });
            if (response.status===201) {
                onUpdate(selectedEntry);
                alert("Entry updated successfully!");
                onClose(); // Close the modal after successful verification
            } else {
                alert("Failed to verify admin password.");
            }
        } catch (error) {
            console.error("Error verifying admin password:", error);
            alert("An error occurred while verifying the password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={open} onHide={onClose} size="md" centered>
            <Modal.Body>
                <div className="container-fluid p-3">
                    <Form className='adminpowerform roboto-font stylelabel'>
                        <Row className='justify-content-between align-items-center mt-2 mb-2'>
                            <Col xs={'auto'}>
                                <span className='modalformheading'>Admin Power</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='text-break'>
                                <p style={{color:'#898989'}}>Authorization is required to edit the information.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex flex-column justify-content-between'>
                                <Row>
                                    <Col>
                                        <Form.Label column sm={12}>Enter Admin Password</Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='inputpasswordeye'>
                                        <InputGroup>
                                            <Form.Control
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Enter password"
                                                value={adminPassword}
                                                onChange={(e) => setAdminPassword(e.target.value)}
                                            />
                                            <InputGroup.Text onClick={togglePasswordVisibility}>
                                                {showPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='justify-content-end align-items-center my-4 gy-2'>
                            <Col xs={'auto'}>
                                <Button className='fw-600 modalformdiscardbtn' onClick={onClose}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col xs={'auto'}>
                                <Button 
                                    className='fw-600 modalformsavebtn' 
                                    onClick={handleVerify} 
                                    disabled={loading}
                                >
                                    {loading ? "Verifying..." : "Verify"}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default AdminPower;

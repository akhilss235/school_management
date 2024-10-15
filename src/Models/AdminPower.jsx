import React, { useState } from "react";
import { Modal, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import request from "../Request"; 
import JournalEntryUpdate from "../Models/JournalEntryUpdate"; 

const AdminPower = ({ open, onClose, accountId }) => {
    const [adminPassword, setAdminPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalJournalEntryUpdate, setModalJournalEntryUpdate] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    const handleVerify = async () => {
        if (!adminPassword) return alert("Please enter your password.");

        setLoading(true);
        try {
            const response = await request.post('checkAdmin', { password: adminPassword });
            if (response.status === 201) {
                // Open the JournalEntryUpdate modal with the accountId
                setModalJournalEntryUpdate(true);
                onClose(); // Close the current modal
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
      <>
        <Modal show={open} onHide={onClose} size="md" centered>
            <Modal.Body>
                <div className="container-fluid p-3">
                    <Form className='adminpowerform'>
                        <Row className='mb-2'>
                            <Col>
                                <span className='modalformheading'>Admin Power</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ color: '#898989' }}>Authorization is required to edit the information.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Enter Admin Password</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter password"
                                        value={adminPassword}
                                        onChange={(e) => setAdminPassword(e.target.value)}
                                    />
                                    <InputGroup.Text onClick={togglePasswordVisibility}>
                                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className='justify-content-end my-4'>
                            <Col xs={'auto'}>
                                <Button onClick={onClose}>Cancel</Button>
                            </Col>
                            <Col xs={'auto'}>
                                <Button onClick={handleVerify} disabled={loading}>
                                    {loading ? "Verifying..." : "Verify"}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
        
        {/* Pass accountId to JournalEntryUpdate modal */}
        <JournalEntryUpdate 
            open={modalJournalEntryUpdate} 
            onClose={() => setModalJournalEntryUpdate(false)} 
            accountId={accountId} 
        />
      </>
    );
};

export default AdminPower;

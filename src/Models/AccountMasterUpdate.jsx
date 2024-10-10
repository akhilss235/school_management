import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AccountMasterUpdate({ open, onClose }) {
  return (
    <Modal show={open} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter AccountMasterUpdate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your form elements here */}
        <p>Cash book entry form goes here...</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}




export default AccountMasterUpdate
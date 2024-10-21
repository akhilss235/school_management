import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import request from "../Request"; // Adjust the path as necessary
import { toast } from "react-toastify"; // Import toast
import Spinner from "react-bootstrap/Spinner";

function AccountMasterUpdate({ open, onClose, accountId, refreshData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    accountHead: "",
    subAccountHead: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Fetch account data when component mounts or accountId changes
  useEffect(() => {
    const fetchAccountData = async () => {
      if (accountId) {
        try {
          setLoading(true);
          setError(null);
          const response = await request.get(
            `getAccountMasterById/${accountId}`
          );
          if (response.data && response.data.data) {
            const accountData = response.data.data;
            setFormData({
              accountHead: accountData.accountHead || "",
              subAccountHead: accountData.subAccountHead || "",
            });
          } else {
            setError("No account data found.");
          }
        } catch (err) {
          setError("Error fetching account data. Please try again later.");
          console.error("Error fetching account data:", err);
        } finally {
          setLoading(false);
        }
      } else {
        setError("No account ID provided");
      }
    };

    fetchAccountData();
  }, [accountId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : "This field is required",// Validate each field
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.accountHead) errors.accountHead = "Account Head is required";
    if (!formData.subAccountHead)
      errors.subAccountHead = "Sub Account Head is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await request.put(
        `updateAccountMaster/${accountId}`,
        formData
      );
      if (response.status === 200) {
        refreshData(); // Refresh the table data
        onClose(); // Close the modal after successful save
        toast.success("Account master updated successfully");
      } else {
        setError("Error saving data. Please try again.");
      }
    } catch (err) {
      setError("Error saving data. Please try again later.");
      toast.error(err.response?.data?.message);

      console.error("Error saving account data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={open} onHide={onClose} size="lg" centered>
      <Modal.Body>
        <div className="container-fluid p-3">
          {error && <div className="alert alert-danger">{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-between align-items-center mt-2 mb-3">
              <Col xs={"auto"}>
                <span className="modalformheading">Edit Account Head</span>
              </Col>
              <Col xs={"auto"}>
                <IoIosCloseCircleOutline
                  size={32}
                  className="modalformclosebtn"
                  onClick={onClose}
                />
              </Col>
            </Row>

            <Row>
              <Col className="d-flex flex-column justify-content-between">
                <Form.Label>Account Head</Form.Label>
                <Form.Control
                  type="text"
                  name="accountHead"
                  value={formData.accountHead}
                  onChange={handleInputChange}
                  placeholder="Enter Account Head"
                  required
                  isInvalid={!!formErrors.accountHead}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.accountHead}
                </Form.Control.Feedback>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col className="d-flex flex-column justify-content-between">
                <Form.Label>Sub Account Head</Form.Label>
                <Form.Control
                  type="text"
                  name="subAccountHead"
                  value={formData.subAccountHead}
                  onChange={handleInputChange}
                  placeholder="Enter Sub Account Head"
                  required
                  isInvalid={!!formErrors.subAccountHead}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.subAccountHead}
                </Form.Control.Feedback>
              </Col>
            </Row>

            <Row className="justify-content-end align-items-center my-4 gy-2">
              <Col xs={"auto"}>
                <Button
                  className="fw-600 modalformdiscardbtn"
                  onClick={onClose}
                >
                  Discard
                </Button>
              </Col>
              <Col xs={"auto"}>
                <Button
                  type="submit"
                  className="fw-600 modalformsavebtn"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner animation="border" variant="primary" />
                  ) : (
                    "Update"
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AccountMasterUpdate;

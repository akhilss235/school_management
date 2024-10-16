import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import request from "../Request"; // Adjust the path as necessary
import useAccountHeads from "../hooks/useAccountHeads";
import { toast } from "react-toastify"; // Import toast
import Spinner from 'react-bootstrap/Spinner';

function AccountMasterEntry({ open, onClose }) {
  const [accountHead, setAccountHead] = useState("");
  const [subAccountHead, setSubAccountHead] = useState("");
  const { subAccountHeads, setSubAccountHeads } = useAccountHeads();
  const [errors, setErrors] = useState({ accountHead: "", subAccountHead: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({ accountHead: "", subAccountHead: "" });

    let isValid = true;
    if (!accountHead) {
      setErrors((prev) => ({
        ...prev,
        accountHead: "Account Head is required.",
      }));
      isValid = false;
    }
    if (!subAccountHead) {
      setErrors((prev) => ({
        ...prev,
        subAccountHead: "Sub Account Head is required.",
      }));
      isValid = false;
    }

    if (!isValid) return;

    const data = {
      accountHead,
      subAccountHead,
    };
    setLoading(true);

    try {
      await request.post("addAccountMaster/", data);
      setAccountHead("");
      setSubAccountHead("");
      onClose();
      toast.success("Account master added successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const removeSubAccountHead = (indexToRemove) => {
    setSubAccountHeads((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <Modal show={open} onHide={onClose} size="lg" centered>
      <Modal.Body>
        <div className="container-fluid p-3">
          <Form
            className="roboto-font stylelabel styleinput"
            onSubmit={handleSubmit}
          >
            <Row className="justify-content-between align-items-center mt-2 mb-3">
              <Col xs={"auto"}>
                <span className="modalformheading">New Account Head</span>
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
                <Row>
                  <Col>
                    <Form.Label column sm={12}>
                      Account Head
                    </Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      value={accountHead}
                      onChange={(e) => setAccountHead(e.target.value)}
                      placeholder=""
                    />
                  </Col>
                  {errors.accountHead && (
                    <div className="text-danger">{errors.accountHead}</div>
                  )}
                </Row>
              </Col>
            </Row>

            <Row>
              <Col className="d-flex flex-column justify-content-between">
                <Row>
                  <Col>
                    <Form.Label column sm={12}>
                      Sub Account Head
                    </Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      value={subAccountHead}
                      onChange={(e) => setSubAccountHead(e.target.value)}
                      placeholder=""
                    />
                    {errors.subAccountHead && (
                      <div className="text-danger">{errors.subAccountHead}</div>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="py-2">
                {subAccountHeads.map((subAccount, index) => (
                  <div
                    className="mt-3 me-3"
                    key={index}
                    style={{ display: "inline-block" }}
                  >
                    <button
                      type="button"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "5px",
                        backgroundColor: "#ECF3FF",
                        color: "#3474EB",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      {subAccount}
                      <IoIosCloseCircleOutline
                        size={18}
                        style={{
                          marginLeft: "5px",
                          color: "red",
                          cursor: "pointer",
                        }}
                        onClick={() => removeSubAccountHead(index)}
                      />
                    </button>
                  </div>
                ))}
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
                    "Save"
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

export default AccountMasterEntry;

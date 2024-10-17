import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Row, Col } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Request from "../Request"; // Adjust the path as necessary
import { useCommon } from "../hooks/useCommon";

function OpeningBalanceDetaies({ open, onClose, accountId }) {
  const {getAmountWithCommas, getDate} = useCommon()
  const [formData, setFormData] = useState({
    accountHead: "",
    subAccountHead: "",
    cash: 0,
    bank: 0,
    diocesan: 0,
    date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAccountData = async () => {
      if (!accountId) {
        setError("No account ID provided.");
        return;
      }

      setLoading(true);
      try {
        const response = await Request.get(`getOpeningBalanceById/${accountId}`);
        const accountData = response.data.message;

        if (accountData) {
          setFormData({
            accountHead: accountData.accountHead || '',
            subAccountHead: accountData.subAccountHead || '',
            cash: accountData.amount?.cash || 0,
            bank: accountData.amount?.bank || 0,
            diocesan: accountData.amount?.diocesan || 0,
            date: accountData.date ? getDate(accountData.date) : '',
          });
        } else {
          setError("No account data found.");
        }
      } catch (err) {
        setError("Error fetching account data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (open) {
      fetchAccountData();
    }
  }, [accountId, open]);

  return (
    <Modal show={open} onHide={onClose} size="md" centered>
      <Modal.Body>
        <Row className="justify-content-between align-items-center mt-2 mb-3">
          <Col xs={"auto"}>
            <h4><b style={{color:'#00A62F'}}>Date: {formData.date}</b></h4>
          </Col>
          <Col xs={"auto"}>
            <IoIosCloseCircleOutline size={32} className="modalformclosebtn" onClick={onClose} />
          </Col>
        </Row>
        <div style={{ textAlign: "start" }}>
          <h5><b className="title">CATHEDRAL NURSERY AND PRIMARY</b></h5>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-danger">{error}</div>
        ) : (
          <>
            <div className="d-flex justify-content-start mt-4" style={{ textAlign: "center" }}>
              <div>
                <h5><b className="title">C/B CASH:</b></h5>
              </div>
              <div className="mx-4">
                <h5><b>{formData.cash.toLocaleString()}</b></h5>
              </div>
            </div>
            <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
              <div>
                <h5><b className="title">C/B BANK:</b></h5>
              </div>
              <div className="mx-4">
                <h5><b>{formData.bank.toLocaleString()}</b></h5>
              </div>
            </div>
            <div className="d-flex justify-content-start" style={{ textAlign: "center" }}>
              <div>
                <h5><b className="title">C/B DIO:</b></h5>
              </div>
              <div className="mx-4">
                <h5><b>{formData.diocesan.toLocaleString()}</b></h5>
              </div>
            </div>
          </>
        )}

      </Modal.Body>
      
    </Modal>
  );
}

export default OpeningBalanceDetaies;

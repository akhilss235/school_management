import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Row, Col } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Request from "../Request"; // Adjust the path as necessary
import { useCommon } from "../hooks/useCommon";
import Table from "react-bootstrap/Table";

function OpeningBalanceDetaies({ open, onClose, accountId }) {
  const { getAmountWithCommas, getDate } = useCommon();
  const [formData, setFormData] = useState({
    accountHead: "",
    subAccountHead: "",
    cash: 0,
    bank: 0,
    diocesan: 0,
    date: "",
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
        const response = await Request.get(
          `getOpeningBalanceById/${accountId}`
        );
        const accountData = response.data.message;

        if (accountData) {
          setFormData({
            accountHead: accountData.accountHead || '',
            subAccountHead: accountData.subAccountHead || '',
            cash: accountData?.cash || 0,
            bank: accountData?.bank || 0,
            diocesan: accountData?.diocesan || 0,
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
            <h4>
              <b style={{ color: "#00A62F" }}>Date: {formData.date}</b>
            </h4>
          </Col>
          <Col xs={"auto"}>
            <IoIosCloseCircleOutline
              size={32}
              className="modalformclosebtn"
              onClick={onClose}
            />
          </Col>
        </Row>
        <div style={{ textAlign: "start" }}>
          <h5>
            <b className="title">CATHEDRAL NURSERY AND PRIMARY</b>
          </h5>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-danger">{error}</div>
        ) : (
          <>
            <div
              className="d-flex justify-content-start mt-4"
              style={{ textAlign: "center" }}
            >
              <div></div>

              <div className="table-responsive">
                <Table responsive="xl">
                  <tbody style={{border:'none'}}>
                    <tr className="d-flex">
                      <td className="title "  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title">C/B CASH</span>{" "}
                        </b>
                      </td>

                      <td className="title"  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title">:</span>{" "}
                        </b>
                      </td>
                      <td className="title"  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title2"  style={{border:'none'}}>
                            {" "}
                            {formData.cash.toLocaleString()}
                          </span>{" "}
                        </b>
                      </td>
                    </tr>


                    <tr className="d-flex"  style={{border:'none'}}> 
                      <td className="title"  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title"  style={{border:'none'}}>C/B BANK</span>{" "}
                        </b>
                      </td>

                      <td className="title"  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title"  style={{border:'none'}}>:</span>{" "}
                        </b>
                      </td>
                      <td className="title"  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title2"  style={{border:'none'}}>
                            {" "}
                            {formData.bank.toLocaleString()}
                          </span>{" "}
                        </b>
                      </td>
                    </tr>






                    <tr className="d-flex"  style={{border:'none'}}>
                      <td className="title"  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title">C/B DIO</span>{" "}
                        </b>
                      </td>

                      <td className="title mx-4"  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title">:</span>{" "}
                        </b>
                      </td>
                      <td className="title "  style={{border:'none'}}  style={{border:'none'}}>
                        <b>
                          {" "}
                          <span className="title2 "  style={{border:'none'}}>
                            {" "}
                            {formData.diocesan.toLocaleString()}                          </span>{" "}
                        </b>
                      </td>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>

           
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default OpeningBalanceDetaies;

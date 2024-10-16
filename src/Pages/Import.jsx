import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Import.css";
import { useImport } from "../hooks/useImport";
import { Button, Form, Row, Col } from "react-bootstrap"; 
import { RiDeleteBinLine } from "react-icons/ri";
import request from "../Request"; 
import { toast } from 'react-toastify'; 

export const Import = () => {
  const { data, tableData } = useImport();
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    document.getElementById("fileInput").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("Please upload a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // Append the file to the FormData

    try {
      const response = await request.post(`upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the correct content type
        },
      });
      console.log("Form submitted successfully:", response.data);
      navigate("/Students");

      toast.success("data uploaded successfully");


    } catch (err) {
      toast.error(err.response?.data?.message || "Upload failed."); 
      console.error("Server responded with:", err.response?.data);
    }
  };

  return (
    <div className="import-page">
      <div className="import-head">
        <h3>Students</h3>
        <button className="download-btn">Download Sample Data</button>
      </div>
      <div className="details">
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
      </div>
      <div className="sample-table">
        <table>
          <thead>
            <tr>
              {tableData.map((item) => (
                <th key={item.id}>{item.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {tableData.map((item) => (
                <td key={item.id}>sample Data</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="import-cont">
        <div className="input-cont">
          <Row>
            <Col>
              <Form.Label column sm={12}>
                Photo of Student
              </Form.Label>
            </Col>
          </Row>
          <div className="align-items-center">
            <div className="row">
              <Form.Control
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {!selectedFile ? (
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "#3474EB",
                    width: "100%",
                    border: "1px dashed #3474EB",
                  }}
                  onClick={handleFileClick}
                >
                  Click here to upload an Excel file
                </Button>
              ) : (
                <div className="row">
                  <div xs="auto" className="d-flex col align-items-center">
                    <span
                      className="me-1 mt-2"
                      style={{
                        wordBreak: "break-all",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "block",
                        color: "#3474EB",
                      }}
                    >
                      {selectedFile.name}
                    </span>
                    <Button
                      variant="link"
                      onClick={handleFileRemove}
                      className="p-0 d-flex justify-content-center align-items-center mt-2"
                      style={{ width: "46px", height: "20px" }}
                    >
                      <RiDeleteBinLine
                        style={{
                          width: "14px",
                          height: "14px",
                          cursor: "pointer",
                        }}
                      />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <button className="import-btn" onClick={handleSubmit}>Import</button>
        </div>
      </div>
    </div>
  );
};

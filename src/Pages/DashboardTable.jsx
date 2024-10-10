import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

function DashboardTable() {
  return (
    <div>
  <Card className="p-3 m-3">
      <div className="d-flex justify-content-between ">
    
        <div className="mt-3 mb-3">
          <h4>
            <b className="title ">Opening Balance Entry</b>
          </h4>
        </div>
        <div className="mt-3 mb-3">
          <Card style={{ borderColor: "#3474EB", height: "2rem" }}>
          <a href="/OpeningBalance" style={{textDecoration:'none'}}>

       
            <div className="p-1">
              <p style={{ color: "#3474EB" }}>View All</p>
            </div>
            </a>
          </Card>
        </div>
      </div>
      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr style={{ color: "#505050" }}>
              <th>Date</th>
              <th>Account Head</th>
              <th>Sub Account Head</th>
              <th>Cash Amt</th>
              <th>Bank Amt</th>
              <th>Diocesan Amt.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>07/10/2024</td>
              <td>CATHEDRAL NURSERY AND PRIMARY</td>
              <td>ADVANCE FROM MANAGEMENT</td>
              <td>Rs. 30,500</td>
              <td>Rs. 30,500</td>
              <td>Rs. 30,500</td>
            </tr>
          </tbody>
        </Table>
      
      </div>
      </Card>
    </div>
  );
}

export default DashboardTable;

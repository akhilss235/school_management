import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { LuPenLine } from "react-icons/lu";
import { LiaEyeSolid } from "react-icons/lia";
import Request from "../Request"; 

function UserAccess() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Request.get("/api/Students");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="row mb-5  ">
        <div className="col-sm-8">
          <h4>
            <b className="title">User List</b>
          </h4>
        </div>
        <div className="col d-flex">
          <div>
            <Form.Control
              placeholder="search...."
              type="text"
              style={{ height: "35px" }}
            />
          </div>
          <div className="mx-3">
            <a href="/UserAccessnew" style={{ textDecoration: "none" }}>
              <Button
                className="addbuttons"
                style={{ height: "35px", width: "auto" }}
              >
                <span style={{ fontSize: "auto" }}>
                  <FiPlus />
                  New User
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr style={{ color: "#505050" }}>
              <th>Sl. no.</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>07/10/2024</td>
              <td>CATHEDRAL NURSERY AND PRIMARY</td>
              <td>6666</td>
              <td>user</td>
              <td>
                <div className="d-flex">
                  <div>
                    <a
                      href="/UserAccessnewDetailes"
                      style={{ textDecoration: "none" }}
                    >
                      <LiaEyeSolid
                        style={{ fontSize: "1.5rem", color: "#3474EB" }}
                        className="mx-3"
                        // onClick={() => setModalOpeningBalanceDetaies(true)}
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      href="/UserAccessnewUpdate"
                      style={{ textDecoration: "none" }}
                    >
                      <LuPenLine
                        style={{ fontSize: "1.5rem", color: "#3474EB" }}
                        // onClick={() => setModalCashBookEntryUpdate(true)}
                      />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Modals */}
    </div>
  );
}

export default UserAccess;

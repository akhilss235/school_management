import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { LuPenLine } from "react-icons/lu";
import AccountMasterEntry from "../Models/AccountMasterEntry";
import AccountMasterUpdate from "../Models/AccountMasterUpdate";
import request from "../Request"; // Adjust the path as necessary
import { RiDeleteBinLine } from "react-icons/ri";
import Pagination from "../components/Pagination";
import AccountHead from "../Pages/AccountHead";
import { GetDate } from "../Pages/Date";
import { NoData } from "./NoData";
import { toast } from "react-toastify";

function AccountMaster() {
    const [modalCashBookEntry, setModalCashBookEntry] = useState(false);
    const [modalCashBookEntryUpdate, setModalCashBookEntryUpdate] = useState(false);
    const [accountData, setAccountData] = useState([]);
    const [selectedAccounts, setSelectedAccounts] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [selectedAccountHead, setSelectedAccountHead] = useState("");
    const itemsPerPage = 10;

    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = sessionStorage.getItem("currentPage");
        return savedPage ? Number(savedPage) : 1;
    });

    const [totalPages, setTotalPages] = useState(0);
    const [selectedAccountId, setSelectedAccountId] = useState(null);

    const fetchData = async () => {
        try {
            const response = await request.get(`/getAccountMaster?search=${searchTerm}&from=${fromDate}&to=${toDate}&accountHead=${selectedAccountHead}&page=${currentPage}&limit=${itemsPerPage}`);
            if (Array.isArray(response.data.data)) {
                setAccountData(response.data.data);
                setTotalPages(Math.ceil(response.data.total / itemsPerPage));
            } else {
                console.error("Expected response.data.data to be an array", response.data.data);
                setAccountData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setAccountData([]);
        }
    };

    useEffect(()=>{
        fetchData()
    },[fromDate, toDate])

    const refreshData = async () => {
        try {
            const response = await request.get(`/getAccountMaster?search=${searchTerm}&fromDate=${fromDate}&toDate=${toDate}&accountHead=${selectedAccountHead}&page=${currentPage}&limit=${itemsPerPage}`);
            if (Array.isArray(response.data.data)) {
                setAccountData(response.data.data);
                setTotalPages(Math.ceil(response.data.total / itemsPerPage));
            } else {
                console.error("Expected response.data.data to be an array", response.data.data);
                setAccountData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setAccountData([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm, currentPage, fromDate, toDate, selectedAccountHead]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handleFromDateChange = (event) => {
        setFromDate(event.target.value);
        setCurrentPage(1);
    };

    const handleToDateChange = (event) => {
        setToDate(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCheckboxChange = (accountId) => {
        setSelectedAccounts((prev) => ({
            ...prev,
            [accountId]: !prev[accountId],
        }));
    };

    const handleSelectAll = () => {
        const allSelected = accountData.every(account => selectedAccounts[account._id]);
        const newSelected = {};
        accountData.forEach(account => {
            newSelected[account._id] = !allSelected;
        });
        setSelectedAccounts(newSelected);
    };

    const isAnySelected = Object.values(selectedAccounts).some(value => value);

    const handleEditClick = (accountId) => {
        setSelectedAccountId(accountId);
        setModalCashBookEntryUpdate(true);
    };

    const handleDeleteAccountMaster = async()=>{
        try {
            await request.delete(`deleteAccountMaster`, {selectedIds:selectedAccountId})
            toast.success("deleted successfully")
        } catch (error) {
            console.log("error at deleting account master", error)
        }
    }

    return (
        <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="d-flex justify-content-between">
                <h4 className="title"><b>Account Master</b></h4>
                {isAnySelected && (
                    <Button style={{ backgroundColor: 'white', color: 'red', borderColor: 'red' }} onClick={handleDeleteAccountMaster}>
                        <RiDeleteBinLine /> Delete
                    </Button>
                )}
            </div>

            <div className="row mb-2 mt-4 align-items-center">
                <div className="col-auto mt-2">
                    <div className="card d-flex align-items-center justify-content-center filterbody" style={{ height: "30px" }}>
                        <IconContext.Provider value={{ className: "react-icons", size: "1.5em" }}>
                            <div className="d-flex align-items-center">
                                <GoFilter className="Filteric" />
                                <span className="Filteric p-2">Filter</span>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="col-auto mt-2">
                    <AccountHead onSelect={setSelectedAccountHead} />
                </div>

                <div className="col-auto mt-2">
                    <GetDate title={"From"} selectedDate={fromDate} setSelectedDate={setFromDate} />
                </div>

                <div className="col-auto mt-2">
                    <GetDate title={"To"} selectedDate={toDate} setSelectedDate={setToDate} />
                </div>

                <div className="col-auto mt-2">
                    <Form.Control
                        placeholder="Search...."
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                <div className="col-auto">
                    <Button className="addbuttons" onClick={() => setModalCashBookEntry(true)}>
                        <FiPlus /> New Account Head
                    </Button>
                </div>
            </div>

            <div className="table-responsive">
                <Table responsive>
                    <thead style={{ color: "#505050" }}>
                        <tr>
                            <th>
                                <div className="checkbox-wrapper-13">
                                    <input
                                        id="select-all"
                                        type="checkbox"
                                        checked={accountData.length > 0 && accountData.every(account => selectedAccounts[account._id])}
                                        onChange={handleSelectAll}
                                    />
                                </div>
                            </th>
                            <th>Created on</th>
                            <th>Account Head</th>
                            <th>Sub Account Head</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountData.map(account => (
                            <tr key={account._id}>
                                <td>
                                    <div className="checkbox-wrapper-13">
                                        <input
                                            id={`checkbox-${account._id}`}
                                            type="checkbox"
                                            checked={!!selectedAccounts[account._id]}
                                            onChange={() => handleCheckboxChange(account._id)}
                                        />
                                    </div>
                                </td>
                                <td>{new Date(account.createdAt).toLocaleDateString()}</td>
                                <td>{account.accountHead}</td>
                                <td>{account.subAccountHead || 'N/A'}</td>
                                <td>
                                    <div className="d-flex">
                                        <LuPenLine
                                            style={{ fontSize: "1.5rem", color: "#3474EB" }}
                                            onClick={() => handleEditClick(account._id)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <NoData model={accountData} />
            </div>
            {
                accountData.length !== 0 &&
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            }
            <AccountMasterEntry
                open={modalCashBookEntry}
                onClose={() => setModalCashBookEntry(false)}
            />
            <AccountMasterUpdate
                open={modalCashBookEntryUpdate}
                onClose={() => setModalCashBookEntryUpdate(false)}
                accountId={selectedAccountId}
                refreshData={refreshData}
            />
        </div>
    );
}

export default AccountMaster;

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FiPlus } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { LuPenLine } from "react-icons/lu";
import { LiaEyeSolid } from "react-icons/lia";
import request from "../Request"; 
import Pagination from "../components/Pagination"; 

function UserAccess() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10; // Define items per page
  
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await request.get(`getAllUser?search=${searchTerm}&page=${currentPage}&limit=${itemsPerPage}`);
        if (response.data && Array.isArray(response.data.data)) {
          setUsers(response.data.data);
          setTotalPages(Math.ceil(response.data.total / itemsPerPage)); // Adjust according to your API response
        } else {
          throw new Error("Fetched data is not an array");
        }
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [currentPage, searchTerm]);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      setCurrentPage(1); // Reset to first page on search
    };
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };


  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="row mb-5">
        <div className="col-sm-8">
          <h4>
            <b className="title">User List</b>
          </h4>
        </div>
        <div className="col d-flex">
          <div>
            <Form.Control
              placeholder="Search...."
              type="text"
              style={{ height: "35px" }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="mx-3">
            <a href="/UserAccessnew" style={{ textDecoration: "none" }}>
              <Button className="addbuttons" style={{ height: "35px", width: "auto" }}>
                <span style={{ fontSize: "auto" }}>
                  <FiPlus />
                  New User
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <Table responsive="xl">
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Sl. no.</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", color: "red" }}>{error}</td>
              </tr>
            ) : (
              users.map((user, index) => (
                
                <tr key={user._id}>
                                <td>{index + (currentPage - 1) * itemsPerPage + 1}</td>

                  <td>{user.name}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.userName}</td>
                  <td>
                    <div className="d-flex">
                      <a href={`/UserAccessnewDetailes/${user._id}`} style={{ textDecoration: "none" }}>
                        <LiaEyeSolid style={{ fontSize: "1.5rem", color: "#3474EB" }} className="mx-3" />
                      </a>
                      <a href={`/UserAccessnewUpdate/${user._id}`} style={{ textDecoration: "none" }}>
                        <LuPenLine style={{ fontSize: "1.5rem", color: "#3474EB" }} />
                      </a>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>  
        </Table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default UserAccess;







// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import { FiPlus } from "react-icons/fi";
// import Form from "react-bootstrap/Form";
// import { LuPenLine } from "react-icons/lu";
// import { LiaEyeSolid } from "react-icons/lia";
// import request from "../Request"; 
// import Pagination from "../components/Pagination"; 

// function UserAccess() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const itemsPerPage = 10; // Define items per page

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await request.get(`getAllUser?search=${searchTerm}&page=${currentPage}&limit=${itemsPerPage}`);
//       if (response.data && Array.isArray(response.data.data)) {
//         setUsers(response.data.data);
//         setTotalPages(Math.ceil(response.data.total / itemsPerPage)); // Adjust according to your API response
//       } else {
//         throw new Error("Fetched data is not an array");
//       }
//     } catch (error) {
//       setError("Error fetching data");
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [currentPage, searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1); // Reset to first page on search
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="container-fluid p-3" style={{ backgroundColor: "#FFFFFF" }}>
//       <div className="row mb-5">
//         <div className="col-sm-8">
//           <h4>
//             <b className="title">User List</b>
//           </h4>
//         </div>
//         <div className="col d-flex">
//           <Form.Control
//             placeholder="Search...."
//             type="text"
//             style={{ height: "35px" }}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <div className="mx-3">
//             <a href="/UserAccessnew" style={{ textDecoration: "none" }}>
//               <Button className="addbuttons" style={{ height: "35px", width: "auto" }}>
//                 <FiPlus /> New User
//               </Button>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="table-responsive">
//         <Table responsive="xl">
//           <thead style={{ color: "#505050" }}>
//             <tr>
//               <th>Sl. no.</th>
//               <th>Name</th>
//               <th>Phone Number</th>
//               <th>User Name</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="5" style={{ textAlign: "center" }}>Loading...</td>
//               </tr>
//             ) : error ? (
//               <tr>
//                 <td colSpan="5" style={{ textAlign: "center", color: "red" }}>{error}</td>
//               </tr>
//             ) : (
//               users.map((user, index) => (
//                 <tr key={user._id}>
//                   <td>{index + (currentPage - 1) * itemsPerPage + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.phoneNumber}</td>
//                   <td>{user.userName}</td>
//                   <td>
//                     <div className="d-flex">
//                       <a href={`/UserAccessnewDetailes/${user._id}`} style={{ textDecoration: "none" }}>
//                         <LiaEyeSolid  style={{ fontSize: "1.5rem", color: "#3474EB" }} className="mx-3" />
//                       </a>
//                       <a href={`/UserAccessnewUpdate/${user._id}`} style={{ textDecoration: "none" }}>
//                         <LuPenLine style={{ fontSize: "1.5rem", color: "#3474EB" }} />
//                       </a>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>  
//         </Table>
//       </div>

//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default UserAccess;

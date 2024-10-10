
import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Styles/Sidebar.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Topbar from "../components/Topbar"; // Corrected typo from "Compontes" to "Components"
import Dashboard from '../img/dashininaactive.png';
import Dashboardact from '../img/Dashboard.png';
import {  useLocation } from "react-router-dom";
import Students from '../img/Accountinactie.png';
import Studentsact from '../img/Studentsactive.png';
import Transaction from '../img/Transactioninactive.png';
import Transactionact from '../img/Transactionactive.png';
import AccountView from '../img/Accountinactie.png';
import AccountViewact from '../img/Accountactive.png';
import Reports from '../img/Reportsinactive.png';
import Reportsact from '../img/Reports.png';
import AccountMasteract from '../img/Masteractive.png';
import AccountMaster from '../img/Masterinactive.png';
import UserAccessact from '../img/UserAccessactive.png';
import UserAccess from '../img/UserAccess.png';
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const getNavLinkClass = (path) => {
    const isActive = location.pathname === path || 
                     (path === '/OpeningBalance' && (
                       location.pathname.startsWith('/OpeningBalance') || 
                       location.pathname.startsWith('/JournalEntry') || 
                       location.pathname.startsWith('/VoucherNumberForm')
                     )) ||
                     (path === '/Students' && (
                       location.pathname.startsWith('/StudentRegister') || 
                       location.pathname.startsWith('/StudentRegisterupdate') || 
                       location.pathname.startsWith('/StudentDetails')
                     )) ||
                     (path === '/UserAccess' && (
                       location.pathname.startsWith('/UserAccessnew') || 
                       location.pathname.startsWith('/UserAccessnewDetailes') || 
                       location.pathname.startsWith('/UserAccessnewUpdate')
                     ));
  
    return isActive ? "active" : "";
  };
  
  useEffect(() => {
    // setActiveItemIndex(0); 
  }, []);

  const menuItem = [
    { path: "/Dashboard", name: "Dashboard", img: [Dashboard, Dashboardact] },
    { path: "/Students", name: "Students", img: [Students, Studentsact] },
    { 
      path: "/OpeningBalance", 
      name: "Transaction", 
      img: [Transaction, Transactionact], 
      subMenu: [
        { path: "/OpeningBalance", name: "Opening Balance" },
        { path: "/JournalEntry", name: "Journal Entry" },
        { path: "/VoucherNumberForm", name: "Voucher Number Form" },
      ]
    },
    { path: "/AccountView", name: "Account View", img: [AccountView, AccountViewact] },
    { path: "/Reports", name: "Reports", img: [Reports, Reportsact] },
    { path: "/AccountMaster", name: "Account Master", img: [AccountMaster, AccountMasteract] },
    { path: "/UserAccess", name: "User Access", img: [UserAccess, UserAccessact] },
  ];

  return (
    <>
      <Topbar toggle={toggle} isOpen={isOpen} />
      <div className="section d-flex" style={{ fontFamily: "Roboto, sans-serif" }}>
        <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar mt-3">
          {menuItem.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.path}
                className={`linkss ${getNavLinkClass(item.path)}`}
                onClick={() => {
                  if (item.subMenu) toggleDropdown(index);
                  setActiveItemIndex(index);
                }}
                onMouseEnter={() => setHoveredItemIndex(index)}
                onMouseLeave={() => setHoveredItemIndex(null)}
              >
                <div className="icon mt-1 mb-1">
                  <img src={activeItemIndex === index || hoveredItemIndex === index ? item.img[1] : item.img[0]} alt={item.name} className="imgs" />
                </div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-1 mb-1">
                  {item.name}
                </div>
                {item.subMenu && (
                  <div className="dropdown-icon" style={{ marginLeft: "auto" }}>
                    {dropdownOpen === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                )}
              </NavLink>
              {item.subMenu && dropdownOpen === index && (
                <div className="subMenu" style={{ display: isOpen ? "block" : "none", marginLeft: "20px" }}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <NavLink to={subItem.path} key={subIndex} className="linkss2 sub-link">
                      <div className="link_text mt-1 mb-1">
                        <GoDotFill className="imgs" /> {subItem.name}
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="link d-flex" style={{ marginTop: "10%" }}>
            <div className="icon"><FaSignOutAlt /></div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text d-flex">Logout</div>
          </div>
        </div>
        <main className="content">{children}</main>
      </div>
    </>
  );
};

const withSideBarLayout = (component) => {
  return <Sidebar>{component}</Sidebar>;
};

export default withSideBarLayout;
// import React, { useState, useEffect } from "react";
// import { FaSignOutAlt } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import "../Styles/Sidebar.css";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { GoDotFill } from "react-icons/go";
// import Topbar from "../components/Topbar"; // Corrected typo from "Compontes" to "Components"
// import Dashboard from '../img/dashininaactive.png';
// import Dashboardact from '../img/Dashboard.png';

// import Students from '../img/Accountinactie.png';
// import Studentsact from '../img/Studentsactive.png';
// import Transaction from '../img/Transactioninactive.png';
// import Transactionact from '../img/Transactionactive.png';
// import AccountView from '../img/Accountinactie.png';
// import AccountViewact from '../img/Accountactive.png';
// import Reports from '../img/Reportsinactive.png';
// import Reportsact from '../img/Reports.png';
// import AccountMasteract from '../img/Masteractive.png';
// import AccountMaster from '../img/Masterinactive.png';
// import UserAccessact from '../img/UserAccessactive.png';
// import UserAccess from '../img/UserAccess.png';

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [activeItemIndex, setActiveItemIndex] = useState(null);
//   const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

//   const toggle = () => setIsOpen(!isOpen);
//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };


  
//   useEffect(() => {
//     setActiveItemIndex(0); // Dashboard is at index 0
//   }, []);

//   const menuItem = [
//     {
//       path: "/Dashboard",
//       name: "Dashboard",
//       img: (index) => (activeItemIndex === index || hoveredItemIndex === index ? (
//         <img src={Dashboardact} alt="Profile" className="imgs" />
//       ) : (
//         <img src={Dashboard} alt="Logo" className="imgs" />
//       )),
//     },
//     {
//       path: "/Students",
//       name: "Students",
//       img: (index) => (activeItemIndex === index || hoveredItemIndex === index ? (
//         <img src={Studentsact} alt="Profile" className="imgs"  />
//       ) : (
//         <img src={Students} alt="Logo" className="imgs" />
//       )),
//     },
//     {
//       path: "/OpeningBalance",
//       name: "Transaction",
//       img: (index) => (activeItemIndex === index || hoveredItemIndex === index ? (
//         <img src={Transactionact} alt="Profile" className="imgs" />
//       ) : (
//         <img src={Transaction} alt="Logo" className="imgs"  />
//       )),
//       icons: dropdownOpen === 2 ? (
//         <IoIosArrowUp className="imgs"  />
//       ) : (
//         <IoIosArrowDown className="imgs" />
//       ),
//       subMenu: [
//         {
//           icon: <GoDotFill className="imgs"  />,
//           path: "/OpeningBalance",
//           name: "Opening Balance",
//         },
//         {
//           icon: <GoDotFill className="imgs" />,
//           path: "/JournalEntry",
//           name: "JournalEntry",
//         },
//         {
//           icon: <GoDotFill className="imgs"  />,
//           path: "/VoucherNumberForm",
//           name: "Voucher Number Form",
//         },
//       ],
//     },
//     {
//       path: "/AccountView",
//       name: "Account View",
//       img: (index) => (activeItemIndex === index || hoveredItemIndex === index ? (
//         <img src={AccountViewact} alt="Profile" className="imgs"  />
//       ) : (
//         <img src={AccountView} alt="Logo" className="imgs"  />
//       )),
//     },
//     {
//       path: "/Reports",
//       name: "Reports",
//       img: (index) => (activeItemIndex === index || hoveredItemIndex === index ? (
//         <img src={Reportsact} alt="Profile" className="imgs"  />
//       ) : (
//         <img src={Reports} alt="Logo" className="imgs"  />
//       )),
//     },
//     {
//       path: "/AccountMaster",
//       name: "Account Master",
//       img: (index) => (activeItemIndex === index || hoveredItemIndex === index ? (
//         <img src={AccountMasteract} alt="Profile" className="imgs" />
//       ) : (
//         <img src={AccountMaster} alt="Logo" className="imgs"  />
//       )),
//     },
//     {
//       path: "/UserAccess",
//       name: "User Access",
//       img: (index) => (activeItemIndex === index || hoveredItemIndex === index ? (
//         <img src={UserAccessact} alt="Profile" className="imgs"  />
//       ) : (
//         <img src={UserAccess} alt="Logo" className="imgs"  />
//       )),
//     },
//   ];

//   return (
//     <>
//       <Topbar toggle={toggle} isOpen={isOpen} />
//       <div className="section d-flex" style={{ fontFamily: "Roboto, sans-serif" }}>
//         <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar mt-3">
//           {menuItem.map((item, index) => (
//             <div key={index}>
//               <NavLink
//                 to={item.path}
//                 className="linkss"
//                 activeClassName="active"
//                 onClick={() => {
//                   item.subMenu && toggleDropdown(index);
//                   setActiveItemIndex(index);
//                 }}
//                 onMouseEnter={() => setHoveredItemIndex(index)}
//                 onMouseLeave={() => setHoveredItemIndex(null)}
//                 exact
//               >
//                 <div className="icon mt-1 mb-1">{item.img(index)}</div>
//                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text mt-1 mb-1">
//                   {item.name}
//                 </div>
//                 {item.subMenu && (
//                   <div className="dropdown-icon" style={{ marginLeft: "auto" }}>
//                     {dropdownOpen === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
//                   </div>
//                 )}
//               </NavLink>
//               {item.subMenu && dropdownOpen === index && (
//                 <div className="subMenu" style={{ display: isOpen ? "block" : "none", marginLeft: "20px" }}>
//                   {item.subMenu.map((subItem, subIndex) => (
//                     <NavLink
//                       to={subItem.path}
//                       key={subIndex}
//                       className="linkss2 sub-link"
//                       activeClassName="active"
//                       exact
//                     >
//                       <div className="link_text mt-1 mb-1">
//                         {subItem.icon} {subItem.name}
//                       </div>
//                     </NavLink>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//           <div className="link d-flex" style={{ marginTop: "10%" }}>
//             <div className="icon">
//               <FaSignOutAlt />
//             </div>
//             <div style={{ display: isOpen ? "block" : "none" }} className="link_text d-flex">
//               Logout
//             </div>
//           </div>
//         </div>
//         <main className="content">{children}</main>
//       </div>
//     </>
//   );
// };

// const withSideBarLayout = (component) => {
//   return <Sidebar>{component}</Sidebar>;
// };

// export default withSideBarLayout;

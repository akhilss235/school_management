import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "../src/components/Dashboard";
import Students from "./components/Students";
import OpeningBalance from "../src/components/OpeningBalance";
import JournalEntry from "./components/JournalEntry";
import VoucherNumberForm from "./components/VoucherNumberForm";
import AccountView from "./components/AccountView";
import Reports from "./components/Reports";
import AccountMaster from "./components/AccountMaster";
import UserAccess from "./components/UserAccess";
import StudentDetails from "./Pages/StudentDetails";
import CashBookEntry from "./Models/CashBookEntry";
import CashBookEntryUpdate from "./Models/CashBookEntryUpdate";
import OpeningBalanceDetaies from "./Models/OpeningBalanceDetaies";
import UserAccessnew from "./Pages/UserAccessnew";
import UserAccessnewUpdate from "./Pages/UserAccessnewUpdate";
import UserAccessnewDetailes from "./Pages/UserAccessnewDetailes";
import StudentRegister from "./Pages/StudentRegister";
import StudentRegisterupdate from "./Pages/StudentRegisterupdate";
import StudentRegisterclone from "./Pages/StudentRegisterclone";
import withSideBarLayout from "./components/Sidebar";
import { ToastContainer } from "react-bootstrap";

function App() {

  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/Dashboard"
              element={withSideBarLayout(<Dashboard />, true)}
            />
            <Route
              path="/Students"
              element={withSideBarLayout(<Students />, true)}
            />
            <Route
              path="/OpeningBalance"
              element={withSideBarLayout(<OpeningBalance />, true)}
            />
            <Route
              path="/JournalEntry"
              element={withSideBarLayout(<JournalEntry />, true)}
            />
            <Route
              path="/VoucherNumberForm"
              element={withSideBarLayout(<VoucherNumberForm />, true)}
            />
            <Route
              path="/AccountView"
              element={withSideBarLayout(<AccountView />, true)}
            />
            <Route
              path="/Reports"
              element={withSideBarLayout(<Reports />, true)}
            />
            <Route
              path="/AccountMaster"
              element={withSideBarLayout(<AccountMaster />, true)}
            />
            <Route
              path="/UserAccess"
              element={withSideBarLayout(<UserAccess />, true)}
            />
            {/* PAGES  */}
            <Route
              path="/StudentDetails/:id"
              element={withSideBarLayout(<StudentDetails />, true)}
            />
            <Route
              path="/UserAccessnew"
              element={withSideBarLayout(<UserAccessnew />, true)}
            />{" "}
            <Route
              path="/UserAccessnewUpdate/:userId"
              element={withSideBarLayout(<UserAccessnewUpdate />, true)}
            />
            <Route
              path="/UserAccessnewDetailes/:userId"
              element={withSideBarLayout(<UserAccessnewDetailes />, true)}
            />
            <Route
              path="/StudentRegister"
              element={withSideBarLayout(<StudentRegister />, true)}
            />
            <Route
              path="/StudentRegisterupdate/:_id"
              element={withSideBarLayout(<StudentRegisterupdate />, true)}
            />
            {/* models  */}
            <Route
              path="/CashBookEntry"
              element={withSideBarLayout(<CashBookEntry />, true)}
            />
            <Route
              path="/CashBookEntryUpdate"
              element={withSideBarLayout(<CashBookEntryUpdate />, true)}
            />
            <Route
              path="/OpeningBalanceDetaies"
              element={withSideBarLayout(<OpeningBalanceDetaies />, true)}
            />
            <Route
            path="/StudentRegisterclone"
            element={withSideBarLayout(<StudentRegisterclone />, true)}
            />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;

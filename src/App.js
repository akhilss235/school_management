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
import { useLogin } from "./hooks/useLogin";
import { ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { Import } from "./Pages/Import";

function App() {
  const { user } = useLogin()

  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Dashboard"
            element={withSideBarLayout(<Dashboard />, true)}
          />
          {
            user?.accessTo?.isStudent &&
            <>
              <Route
                path="/Students"
                element={withSideBarLayout(<Students />, true)}
              />
              <Route
                path="/Students/Import"
                element={withSideBarLayout(<Import />, true)}
              />
              <Route
                path="/StudentDetails/:_id"
                element={withSideBarLayout(<StudentDetails />, true)}
              />
              <Route
                path="/StudentRegister"
                element={withSideBarLayout(<StudentRegister />, true)}
              />
              <Route
                path="/StudentRegisterupdate/:_id"
                element={withSideBarLayout(<StudentRegisterupdate />, true)}
              />
              <Route
                path="/StudentRegisterclone"
                element={withSideBarLayout(<StudentRegisterclone />, true)}
              />
            </>
          }
          {
            user?.accessTo?.isTransaction &&
            <>
              <Route
                path="/OpeningBalance"
                element={withSideBarLayout(<OpeningBalance />, true)}
              />
              <Route
                path="/OpeningBalanceDetaies"
                element={withSideBarLayout(<OpeningBalanceDetaies />, true)}
              />
              <Route
                path="/JournalEntry"
                element={withSideBarLayout(<JournalEntry />, true)}
              />
              <Route
                path="/VoucherNumberForm"
                element={withSideBarLayout(<VoucherNumberForm />, true)}
              />
            </>
          }
          {
            user?.accessTo?.isAccountView &&
            <Route
              path="/AccountView"
              element={withSideBarLayout(<AccountView />, true)}
            />
          }
          {
            user?.accessTo?.isReports &&
            <Route
              path="/Reports"
              element={withSideBarLayout(<Reports />, true)}
            />
          }
          {
            user?.accessTo?.isAccountMaster &&
            <Route
              path="/AccountMaster"
              element={withSideBarLayout(<AccountMaster />, true)}
            />
          }
          <Route
            path="/UserAccess"
            element={withSideBarLayout(<UserAccess />, true)}
          />
          {/* PAGES  */}
          
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
        </Routes>

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
      </>
    </div>
  );
}

export default App;
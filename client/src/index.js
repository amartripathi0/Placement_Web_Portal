import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import Home from './pages/homepages/Home'
import About from "./pages/homepages/About";
import Page from "./pages/homepages/Page";
import Contact from "./pages/homepages/Contact";
import Support from "./pages/homepages/Support";

import StudentDashboard from "./pages/student/dashboard/StudentDashboard";
import StudentProfile from "./pages/student/dashboard/pageContents/StudentProfile";
import AcademicDetail from "./pages/student/dashboard/pageContents/AcademicDetail";
import Resume from "./pages/student/dashboard/pageContents/Resume";
import Interview from "./pages/student/dashboard/pageContents/Interview";
import ChangePassword from "./pages/student/dashboard/pageContents/ChangePassword";
import HomePage from "./pages/homepages/HomePage";
import Body from "./pages/homepages/Body";
import MainLogin from "./pages/MainLogin";
import MainSignUp from "./pages/MainSignUp";
import SignUpStudent from "./pages/student/auth/SignUpStudent";
import LoginCollege from "./pages/college/auth/LoginCollege";
import LoginCompany from "./pages/company/auth/LoginCompany";
import LoginStudent from "./pages/student/auth/LoginStudent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Route>
      
        <Route path="/signin" element={<MainLogin />} />
        <Route path="/signup" element={<MainSignUp />} />
        <Route path="/signup/student" element={<SignUpStudent />} />

        <Route path="/signin/student" element={<LoginStudent />} />
        <Route path="/signin/college" element={<LoginCollege />} />
        <Route path="/signin/company" element={<LoginCompany />} />
        

      <Route path="/student" element={<StudentDashboard />}>
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/academicDetails" element={<AcademicDetail />} />
        <Route path="/student/resume" element={<Resume />} />
        <Route path="/student/interview" element={<Interview />} />
        <Route path="/student/changePassword" element={<ChangePassword />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> 
    <RouterProvider router={router} />
  // </React.StrictMode>
);

import { useState, userEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CourseIndex from "./pages/courseIndex";
import CourseCreation from "./pages/courseCreation";
import CourseDeletion from "./pages/courseDeletion";
import Home from "./pages/home";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseIndex" element={<CourseIndex />} />
        <Route path="/courseCreation" element={<CourseCreation />} />
        <Route path="/courseDeletion" element={<CourseDeletion />} />
      </Routes>
    </BrowserRouter>
  );
}

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active text-warning">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/CourseIndex" className="nav-link">
              Course Index
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/CourseCreation" className="nav-link">
              Add Course
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/CourseDeletion" className="nav-link">
              Delete Course
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;

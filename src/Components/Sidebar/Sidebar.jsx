import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeSidebar = () => {
    setIsCollapsed(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar-container fixed  " >
        <div className="sidebar d-flex flex-column justify-content-between bg-dark text-white p-4  " style={{height:"100vh"}}>
          <div>
            <div className="d-flex align-items-center text-white text-decoration-none">
              <Link to= "/" className="nav-link text-white">
              <i className="bi bi-person-circle fs-5 me-2"></i>
              <span className="fs-5">ADMIN-PANEL</span>
              </Link>
            </div>
            <hr className="text-secondary mt-2" />
            <ul className="nav nav-pills flex-column p-0 m-0">
              <li className="nav-item p-1">
                <Link to="/" className="nav-link text-white">
                  <i className="bi bi-speedometer me-2 fs-5"></i>
                  <span className="fs-5">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="user" className="nav-link text-white">
                  <i className="bi bi-people me-2 fs-5"></i>
                  <span className="fs-5">User</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/products" className="nav-link text-white">
                  <i className="bi  bi-cart4 me-2 fs-5"></i>
                  <span className="fs-5">Products</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/blog" className="nav-link text-white">
                  <i className="bi bi-chat-heart me-2 fs-5"></i>
                  <span className="fs-5">Blog</span>
                </Link>
              </li>
              
              <li className="nav-item p-1">
                <Link to="/notfound" className="nav-link text-white">
                  <i className="bi bi-ban me-2 fs-5"></i>
                  <span className="fs-5">Not Found</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <hr className="text-secondary" />
            <Link to="/" className="nav-link text-white"><i className="bi bi-person fs-5 text-white"></i>
            <span className="fs-4 text-white">YourSelf</span></Link>
            
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <div className="mobile-toggle">
        <i
          
        className="bi bi-list ms-2 mt-1 fs-5 "
          style={{ cursor: "pointer" }}
          onClick={toggleSidebar}
        ></i>
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebarMbl ${isCollapsed ? "show" : ""}`}>
        {/* Close Button (X) */}
        <i
          className="bi bi-x mx-2 mt-1 fs-5 text-white"
          style={{ cursor: "pointer" }}
          onClick={closeSidebar}
        ></i>


        <div className="d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100">
          <div>
            <div className="d-flex align-items-center text-white text-decoration-none">
                  <i className="bi bi-person-circle fs-5"></i>
                  <span className="fs-5">ADMIN PANEL</span>

            </div>
            <hr className="text-secondary mt-2" />
            <ul className="nav nav-pills flex-column p-0 m-0">
            <li className="nav-item p-1">
                <Link to="/" className="nav-link text-white">
                  <i className="bi bi-speedometer me-2 fs-5"></i>
                  <span className="fs-5">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="user" className="nav-link text-white">
                  <i className="bi bi-people me-2 fs-5"></i>
                  <span className="fs-5">User</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/products" className="nav-link text-white">
                  <i className="bi  bi-cart4 me-2 fs-5"></i>
                  <span className="fs-5">Products</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/blog" className="nav-link text-white">
                  <i className="bi bi-chat-heart me-2 fs-5"></i>
                  <span className="fs-5">Blog</span>
                </Link>
              </li>
            
              <li className="nav-item p-1">
                <Link to="/notfound" className="nav-link text-white">
                  <i className="bi bi-ban me-2 fs-5"></i>
                  <span className="fs-5">Not Found</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <hr className="text-secondary" />
            <Link to="/" className="nav-link text-white">
            <i className="bi bi-person fs-5 text-white"></i>
            <span className="fs-5 text-white text-decoration-none">YourSelf</span></Link>
           

          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

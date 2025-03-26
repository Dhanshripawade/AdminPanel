import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaBars, FaHome, FaTachometerAlt, FaUser, FaUserCircle, FaBlog, FaBox } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar d-flex flex-column ${isCollapsed ? 'collapsed' : ''}`}>
            {/* Sidebar Header */}
            <div className="sidebar-header d-flex align-items-center">
                {/* User Info */}
                <div className="user-info d-flex align-items-center flex-grow-1">
                    <FaUserCircle size={25} className="text-secondary me-2" />
                    {!isCollapsed && <span className="fw-bold">Jaydon Frankie</span>}
                </div>

                {/* Toggle Button - Positioned inside the sidebar */}
                <Button className="toggle-btn d-lg-none" variant="secondary" onClick={toggleSidebar}>
                    <FaBars />
                </Button>
            </div>

            {/* Navigation Links */}
            <Navbar expand="lg" className="flex-column align-items-start">
                <Nav className="flex-column w-100">
                    <Nav.Link href="#home" className="d-flex align-items-center">
                        <FaHome className="me-2" /> {!isCollapsed && 'Home'}
                    </Nav.Link>
                    <Nav.Link href="#dashboard" className="d-flex align-items-center">
                        <FaTachometerAlt className="me-2" /> {!isCollapsed && 'Dashboard'}
                    </Nav.Link>
                    <Nav.Link href="#user" className="d-flex align-items-center">
                        <FaUser className="me-2" /> {!isCollapsed && 'User'}
                    </Nav.Link>
                    <Nav.Link href="#products" className="d-flex align-items-center">
                        <FaBox className="me-2" /> {!isCollapsed && 'Products'}
                    </Nav.Link>
                    <Nav.Link href="#blog" className="d-flex align-items-center">
                        <FaBlog className="me-2" /> {!isCollapsed && 'Blog'}
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Sidebar;

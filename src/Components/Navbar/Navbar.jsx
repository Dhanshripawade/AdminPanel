import React, { useState } from "react";
import { Container, Navbar, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaBell, FaUserCircle, FaBars } from "react-icons/fa";

function Navbar1 ()
 {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Navbar
            className="px-3 py-2 bg-white shadow-sm">
           <Container fluid className="d-flex align-items-center">


                <Form className="d-none d-md-flex flex-grow-1 me-4">
                    <InputGroup className=" rounded-pill overflow-hidden">
                        <InputGroup.Text style={{ border: "none" }}>
                            <FaSearch />
                        </InputGroup.Text>
                        <FormControl
                            type="search"
                            placeholder="Search here..."
                            style={{ border: "none", outline: "none", boxShadow: "none" }}
                        />
                    </InputGroup>
                </Form>

                <div className="d-flex align-items-center gap-3 position-relative mx-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIkjWuYPdlUlSxLDGzGUk8HV7JDUqdgqQvg&s"
                        alt="Flag"
                        width="24"
                        height="24"
                        style={{ borderRadius: "10%" }}
                    />
                    <FaBell size={20} className="cursor-pointer" />
                    <div>
                        <FaUserCircle
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setShowDropdown(!showDropdown)}
                        />
                        {showDropdown && (
                            <div
                                style={{
                                    position: "absolute", right: 0, top: "40px",
                                    background: "white", boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                    padding: "10px", zIndex: 1, minWidth: "90px", borderRadius:"5%",
                                }}
                            >
                                <Button variant="light" className="d-flex w-100 mb-2" href="/login">Login</Button>
                                <Button variant="light" className="w-100" href="/signUp">Signup</Button>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default Navbar1;

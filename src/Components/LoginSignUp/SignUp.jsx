import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", contact: "", password: "" });
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/;
    const contactRegex = /^[0-9]+$/;
    const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || !formData.email || !formData.contact || !formData.password) {
      setError("All fields are required!");
      return;
    }

    if (!nameRegex.test(formData.name)) {
      setError("Name should contain only characters.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!contactRegex.test(formData.contact)) {
      setError("Contact should contain only numbers.");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setError("Password must include at least one special character.");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.email === formData.email) {
      setError("User already exists! Please log in.");
      return;
    }

    setError("");
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <Container className="p-5 bg-white rounded shadow" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contact :</Form.Label>
            <Form.Control
              type="text"
              name="contact"
              placeholder="Enter your number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a number.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
            />
            <Form.Control.Feedback type="invalid">Password must be at least 6 characters.</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" variant="success" className="w-100">Sign Up</Button>
        </Form>
        <p className="mt-3 text-center">Already have an account? <a href="/login">Log in</a></p>
      </Container>
    </div>
  );
};

export default SignUp;

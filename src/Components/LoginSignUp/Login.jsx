import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== formData.email || storedUser.password !== formData.password) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("authenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#f0f2f5" }}>
      <Container className="p-5 bg-white rounded shadow" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Log in</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Login</Button>
        </Form>
        <p className="mt-3 text-center">Don't have an account? <a href="/signUp">Sign up</a></p>
      </Container>
    </div>
  );
};

export default Login;

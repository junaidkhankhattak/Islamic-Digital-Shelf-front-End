import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To display login errors
  const navigate = useNavigate(); // For navigation after successful login

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("Please enter email and password");
    return;
  }

  const user = { email, password };

  try {
    const response = await axios.post("http://localhost:8080/api/login", user);

    // Assuming backend returns a token (JWT or dummy)
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token); // Store token
      navigate("/"); // Redirect to homepage or dashboard
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      setError("Invalid email or password");
    } else {
      setError("Something went wrong. Please try again.");
    }
  }
};


  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.submitButton}>
            Login
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>} {/* Display error message */}
        <p style={styles.text}>
          Forgot your password?{" "}
          <Link to="/forgot-password" style={styles.link}>
            Reset here
          </Link>
        </p>
        <p style={styles.text}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
  formContainer: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    display: "grid",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
  },
  submitButton: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px 0",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  text: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
};

export default Login;

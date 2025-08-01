import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  
const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const userData = { name, email, phoneNumber, password };

  try {
    const response = await axios.post("http://localhost:8080/api/register", userData);
    console.log(" Registration Successful:", response.data);
    alert("Registration successful!");
    navigate("/login");
  } catch (error) {
    console.error(" Error during registration:", error);
    alert("Registration failed. Please try again.");
  }
};

  return (
    <div style={styles.wrapper}>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.submitButton}>Sign Up</button>
        </form>

        <div style={styles.socialLogin}>
          <button style={styles.socialIcon}><FaGoogle /></button>
          <button style={styles.socialIcon}><FaFacebook /></button>
        </div>

        <p style={styles.text}>
          Already have an account? <Link to="/login" style={styles.link}>Login here</Link>
        </p>
        <p style={styles.text}>
          Forgot your password? <Link to="/forgot-password" style={styles.link}>Reset here</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // white background
    minHeight: "100vh",
    padding: "20px",
  },
  formBox: {
    width: "100%",
    maxWidth: "360px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  socialLogin: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  socialIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#f0f0f0",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "18px",
  },
  text: {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "13px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default SignUp;

import React from "react";
import styles from './Login.module.css';
import logo from "./images/logo.png"

const clientId = '';
const redirectUri = 'http://localhost:3000/'; // Your redirect URI
const scope = "user-read-email user-library-modify";

const Login = () => {
  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`;

    window.location = authUrl;
  };

  return (
    <div className={styles.main}>
      <img  className={styles.img} src={logo} alt="Not visible" />
      <button className={styles.button} onClick={handleLogin}> Login To spotify </button>
    </div>
  );
};
 
export default Login;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../style/Login.css";

const API_BASE = "http://localhost:3000";

function Login() {
  const { setUsername, setToken } = useContext(AuthContext);
  const [username, setLocalUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleAuth(path: "login" | "register") {
    try {
      const res = await fetch(`${API_BASE}/api/auth/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setUsername(data.user.username);
      setToken(data.token);
      navigate("/");
    } catch {
      setError("Authentication error");
    }
  }

  return (
    <div className="login-container">
      <h2>Login / Register</h2>
      <form className="login-form">
        <label>
          Username
          <input
            value={username}
            onChange={(e: any) => setLocalUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </label>
        <div className="login-buttons">
          <button type="button" onClick={() => handleAuth("login")}>
            Login
          </button>
          <button type="button" onClick={() => handleAuth("register")}>
            Register
          </button>
        </div>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
  );
}

export default Login;

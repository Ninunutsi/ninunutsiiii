import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../contexts/AdminAuthContext";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAdminAuth();
  //   დროებით ესე და მერე .env-ში შევინახოთ
  const validUserName = "cap";
  const validPassword = "12";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUserName && password === validPassword) {
      login();
      navigate("products");
    } else {
      setError("Invalid user or password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        gap: "10px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("git_admin_auth", "true");
      router.push("/admin");
      return;
    }

    setError("Invalid username or password");
  }

  return (
    <main style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <form onSubmit={handleLogin} style={{ width: 360, border: "1px solid #ddd", padding: 32 }}>
        <h1>Admin Login</h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: 12, marginBottom: 12 }}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 12, marginBottom: 12 }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ width: "100%", padding: 12 }}>
          Login
        </button>

        <p style={{ marginTop: 16, fontSize: 12 }}>
          Demo: admin / admin123
        </p>
      </form>
    </main>
  );
}
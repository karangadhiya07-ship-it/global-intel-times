"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const sessionStorageKey = "git_admin_session";

function hasAdminSession() {
  return window.localStorage.getItem(sessionStorageKey) === "demo-authenticated";
}

type AdminLoginFormProps = {
  expectedUsername: string;
  expectedPassword: string;
};

export default function AdminLoginForm({ expectedUsername, expectedPassword }: AdminLoginFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (hasAdminSession()) {
        router.replace("/admin");
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [router]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username") ?? "");
    const password = String(formData.get("password") ?? "");

    if (username !== expectedUsername || password !== expectedPassword) {
      setError("The username or password is incorrect.");
      return;
    }

    window.localStorage.setItem(sessionStorageKey, "demo-authenticated");
    router.replace("/admin");
  }

  return (
    <form className="admin-login-form" onSubmit={handleSubmit}>
      <label htmlFor="admin-username">Username</label>
      <input id="admin-username" name="username" type="text" autoComplete="username" required />

      <label htmlFor="admin-password">Password</label>
      <input id="admin-password" name="password" type="password" autoComplete="current-password" required />

      {error && <p role="alert">{error}</p>}

      <button type="submit" className="admin-button">Sign in</button>
    </form>
  );
}

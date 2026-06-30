"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const sessionCookieName = "git_admin_session";

type AdminLoginFormProps = {
  expectedUsername: string;
  expectedPassword: string;
};

export default function AdminLoginForm({ expectedUsername, expectedPassword }: AdminLoginFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username") ?? "");
    const password = String(formData.get("password") ?? "");

    if (username !== expectedUsername || password !== expectedPassword) {
      setError("The username or password is incorrect.");
      return;
    }

    document.cookie = `${sessionCookieName}=static-admin; path=/; max-age=86400; SameSite=Lax`;
    router.replace(searchParams.get("next") || "/admin");
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

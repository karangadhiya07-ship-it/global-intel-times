"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const sessionCookieName = "git_admin_session";

function hasAdminSession() {
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .some((cookie) => cookie.startsWith(`${sessionCookieName}=`));
}

function secureCookieSuffix() {
  return window.location.protocol === "https:" ? "; Secure" : "";
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

    document.cookie = `${sessionCookieName}=static-admin; path=/; max-age=86400; SameSite=Strict${secureCookieSuffix()}`;
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

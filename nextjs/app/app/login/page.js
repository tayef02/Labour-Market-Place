"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { browserClient } from "../lib/supabase-client";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const supabase = browserClient();

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("অপেক্ষা করুন...");

    const { error } = await supabase.auth.signInWithPassword({
      email: phone + "@labourmarket.com",
      password: password,
    });

    if (error) {
      setMessage("ফোন নম্বর বা পাসওয়ার্ড ভুল।");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div>
      <h1>লগইন</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="ফোন নম্বর"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="পাসওয়ার্ড"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">লগইন</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

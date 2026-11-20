"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { browserClient } from "../lib/supabase-client";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("worker");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const supabase = browserClient();

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("অপেক্ষা করুন...");

    const { error } = await supabase.auth.signUp({
      email: phone + "@labourmarket.com",
      password: password,
      options: {
        data: {
          name: name,
          phone: phone,
          role: role,
        },
      },
    });

    if (error) {
      setMessage("সমস্যা: " + error.message);
      return;
    }

    setMessage("অ্যাকাউন্ট হয়ে গেছে।");
    router.push("/");
  }

  return (
    <div>
      <h1>অ্যাকাউন্ট খুলুন</h1>

      <form onSubmit={handleSubmit}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="worker">কাজ খুঁজছি</option>
          <option value="client">শ্রমিক দরকার</option>
        </select>

        <input
          placeholder="পুরো নাম"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button type="submit">অ্যাকাউন্ট খুলুন</button>
      </form>

      <p>{message}</p>
    </div>
  );
}
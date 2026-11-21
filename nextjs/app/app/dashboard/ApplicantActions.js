"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { browserClient } from "../lib/supabase-client";

export default function ApplicantActions({ id }) {
  const [message, setMessage] = useState("");

  const router = useRouter();
  const supabase = browserClient();

  async function decide(newStatus) {
    setMessage("অপেক্ষা করুন...");

    const { error } = await supabase
      .from("applications")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      setMessage("সমস্যা: " + error.message);
      return;
    }

    router.refresh();
  }

  return (
    <div>
      <button onClick={() => decide("accepted")}>নেব</button>
      <button onClick={() => decide("rejected")}>নেব না</button>
      <span>{message}</span>
    </div>
  );
}

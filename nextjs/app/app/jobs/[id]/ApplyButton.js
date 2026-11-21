"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { browserClient } from "../../lib/supabase-client";

export default function ApplyButton({ jobId, profile }) {
  const [message, setMessage] = useState("");

  const router = useRouter();
  const supabase = browserClient();

  async function handleClick() {
    setMessage("অপেক্ষা করুন...");

    const { error } = await supabase.from("applications").insert({
      job_id: jobId,
      worker_id: profile.id,
      worker_name: profile.name,
      worker_phone: profile.phone,
    });

    if (error) {
      if (error.code === "23505") {
        setMessage("আপনি আগেই আবেদন করেছেন।");
      } else {
        setMessage("সমস্যা: " + error.message);
      }
      return;
    }

    setMessage("আবেদন জমা হয়েছে।");
    router.refresh();
  }

  return (
    <div>
      <button onClick={handleClick}>এই কাজে আবেদন করুন</button>
      <p>{message}</p>
    </div>
  );
}

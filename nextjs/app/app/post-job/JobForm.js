"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { browserClient } from "../lib/supabase-client";

const trades = [
  "Mason",
  "Helper",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Cleaner",
  "Cook",
  "Loader",
  "Driver",
];

export default function JobForm({ profile }) {
  const [form, setForm] = useState({
    title: "",
    job_type: "Mason",
    wage: "",
    workers_needed: "1",
    duration: "",
    start_date: "",
    district: "",
    upazila: "",
    address: "",
    details: "",
    contact_phone: profile.phone || "",
  });

  const [message, setMessage] = useState("");

  const router = useRouter();
  const supabase = browserClient();

  function change(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("অপেক্ষা করুন...");

    const { error } = await supabase.from("jobs").insert({
      ...form,
      wage: Number(form.wage),
      workers_needed: Number(form.workers_needed),
      division: "Sylhet",
      status: "open",
      client_id: profile.id,
      client_name: profile.name,
    });

    if (error) {
      setMessage("সমস্যা: " + error.message);
      return;
    }

    router.push("/jobs");
    router.refresh();
  }

  return (
    <div>
      <h1>কাজ পোস্ট করুন</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="কাজের শিরোনাম"
          value={form.title}
          onChange={change}
          required
        />

        <select name="job_type" value={form.job_type} onChange={change}>
          {trades.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <input
          name="wage"
          type="number"
          placeholder="দৈনিক মজুরি"
          value={form.wage}
          onChange={change}
          required
        />

        <input
          name="workers_needed"
          type="number"
          placeholder="কতজন লাগবে"
          value={form.workers_needed}
          onChange={change}
          required
        />

        <input
          name="duration"
          placeholder="কত দিনের কাজ"
          value={form.duration}
          onChange={change}
        />

        <input
          name="start_date"
          type="date"
          value={form.start_date}
          onChange={change}
        />

        <input
          name="district"
          placeholder="জেলা"
          value={form.district}
          onChange={change}
          required
        />

        <input
          name="upazila"
          placeholder="উপজেলা"
          value={form.upazila}
          onChange={change}
          required
        />

        <input
          name="address"
          placeholder="ঠিকানা"
          value={form.address}
          onChange={change}
        />

        <textarea
          name="details"
          placeholder="বিস্তারিত"
          value={form.details}
          onChange={change}
        />

        <input
          name="contact_phone"
          placeholder="যোগাযোগের ফোন"
          value={form.contact_phone}
          onChange={change}
          required
        />

        <button type="submit">পোস্ট করুন</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

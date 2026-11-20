import Link from "next/link";
import { serverClient } from "../lib/supabase-server";
import ApplicantActions from "./ApplicantActions";

const statusText = {
  pending: "অপেক্ষমাণ",
  accepted: "গৃহীত",
  rejected: "বাতিল",
};

export default async function ClientDashboard({ profile }) {
  const supabase = await serverClient();

  const { data: jobs } = await supabase
    .from("jobs")
    .select("id, title, job_type, wage, status")
    .eq("client_id", profile.id)
    .order("created_at", { ascending: false });

  const { data: applications } = await supabase
    .from("applications")
    .select("id, worker_name, worker_phone, status, jobs!inner(title, client_id)")
    .eq("jobs.client_id", profile.id)
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1>{profile.name}</h1>

      <h2>আমার পোস্ট করা কাজ</h2>
      <Link href="/post-job">নতুন কাজ পোস্ট করুন</Link>

      {jobs.length === 0 && <p>এখনো কিছু পোস্ট করেননি।</p>}

      {jobs.map((j) => (
        <div key={j.id}>
          <b>{j.title}</b>
          <p>{j.job_type} · {j.wage} টাকা</p>
        </div>
      ))}

      <h2>আবেদনকারী</h2>

      {applications.length === 0 && <p>এখনো কেউ আবেদন করেনি।</p>}

      {applications.map((a) => (
        <div key={a.id}>
          <b>{a.worker_name}</b>
          <p>
            {a.jobs.title} · {a.worker_phone} · {statusText[a.status]}
          </p>
          {a.status === "pending" && <ApplicantActions id={a.id} />}
        </div>
      ))}
    </div>
  );
}
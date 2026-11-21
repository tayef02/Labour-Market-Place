import Link from "next/link";
import { serverClient } from "../../lib/supabase-server";
import ApplyButton from "./ApplyButton";

export default async function JobDetail({ params }) {
  const { id } = await params;
  const supabase = await serverClient();

  const { data: job } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!job) {
    return <h1>কাজটি পাওয়া যায়নি</h1>;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile = null;

  if (user) {
    const result = await supabase
      .from("profiles")
      .select("id, name, phone, role")
      .eq("id", user.id)
      .maybeSingle();

    profile = result.data;
  }

  return (
    <div>
      <h1>{job.title}</h1>

      <p>
        {job.job_type} · {job.wage} টাকা · {job.workers_needed} জন
      </p>

      <p>
        {job.upazila}, {job.district}
      </p>

      <p>{job.address}</p>
      <p>{job.details}</p>
      <p>ফোন: {job.contact_phone}</p>

      {profile && profile.role === "worker" && (
        <ApplyButton jobId={job.id} profile={profile} />
      )}

      {!user && (
        <p>
          <Link href="/login">আবেদন করতে লগইন করুন</Link>
        </p>
      )}
    </div>
  );
}

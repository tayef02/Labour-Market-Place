import Link from "next/link";
import { supabase } from "../lib/supabase";

export default async function Jobs() {
  const { data: jobs } = await supabase
    .from("jobs")
    .select("id, title, job_type, wage, district, upazila")
    .eq("status", "open")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1>কাজের তালিকা</h1>

      {(!jobs || jobs.length === 0) && <p>এখন কোনো খোলা কাজ নেই।</p>}

      {jobs &&
        jobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <div>
              <b>{job.title}</b>
              <p>
                {job.job_type} · {job.wage} টাকা · {job.upazila}, {job.district}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

import { serverClient } from "../lib/supabase-server";

const statusText = {
  pending: "অপেক্ষমাণ",
  accepted: "গৃহীত",
  rejected: "বাতিল",
};

export default async function WorkerDashboard({ profile }) {
  const supabase = await serverClient();

  const { data: applications } = await supabase
    .from("applications")
    .select("id, status, jobs(title, wage, district, upazila)")
    .eq("worker_id", profile.id)
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1>{profile.name}</h1>
      <h2>আমার আবেদন</h2>

      {(!applications || applications.length === 0) && (
        <p>এখনো কোনো আবেদন করেননি।</p>
      )}

      {applications &&
        applications.map((a) => (
          <div key={a.id}>
            <b>{a.jobs.title}</b>
            <p>
              {a.jobs.wage} টাকা · {a.jobs.upazila}, {a.jobs.district} ·{" "}
              {statusText[a.status]}
            </p>
          </div>
        ))}
    </div>
  );
}

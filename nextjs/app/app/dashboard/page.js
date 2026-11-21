import { redirect } from "next/navigation";
import { serverClient } from "../lib/supabase-server";
import WorkerDashboard from "./WorkerDashboard";
import ClientDashboard from "./ClientDashboard";

export default async function Dashboard() {
  const supabase = await serverClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, name, role")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile) {
    redirect("/login");
  }

  if (profile.role === "worker") {
    return <WorkerDashboard profile={profile} />;
  }

  return <ClientDashboard profile={profile} />;
}

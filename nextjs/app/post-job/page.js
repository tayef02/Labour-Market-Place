import { redirect } from "next/navigation";
import { serverClient } from "../lib/supabase-server";
import JobForm from "./JobForm";

export default async function PostJob() {
  const supabase = await serverClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, name, role, phone")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile || profile.role !== "client") {
    redirect("/");
  }

  return <JobForm profile={profile} />;
}
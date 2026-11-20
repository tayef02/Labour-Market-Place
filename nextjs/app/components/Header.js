import Link from "next/link";
import { serverClient } from "../lib/supabase-server";
import Logout from "./Logout";

export default async function Header() {
  const supabase = await serverClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile = null;

  if (user) {
    const result = await supabase
      .from("profiles")
      .select("name, role")
      .eq("id", user.id)
      .maybeSingle();

    profile = result.data;
  }

  return (
    <header>
      <Link href="/">লেবার মার্কেট প্লেস</Link>
      <Link href="/jobs">কাজ</Link>

      {profile ? (
        <>
                  <Link href="/dashboard">{profile.name}</Link>
          <Logout />
        </>
      ) : (
        <>
          <Link href="/login">লগইন</Link>
          <Link href="/register">নিবন্ধন</Link>
        </>
      )}
    </header>
  );
}
"use client";

import { useRouter } from "next/navigation";
import { browserClient } from "../lib/supabase-client";

export default function Logout() {
  const router = useRouter();
  const supabase = browserClient();

  async function handleClick() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return <button onClick={handleClick}>লগ আউট</button>;
}

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/control-panel/connections");
  }

  // Unauthenticated users: Next.js resolves (marketing)/page.tsx for the / route
  return null;
}

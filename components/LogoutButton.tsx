
"use client";

import { useTransition } from "react";
import { signOut } from "@/lib/actions/auth.action";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => signOut())}
      disabled={isPending}
      className="btn-logout"
    >
      {isPending ? "Logging out..." : "Logout"}
    </button>
  );
}

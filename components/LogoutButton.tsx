
"use client";
import {Button} from '@/components/ui/button'
import { useTransition } from "react";
import { signOut } from "@/lib/actions/auth.action";
import LogoutIcon from '@mui/icons-material/Logout';
export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
    className='w-15 bg-transparent text-white cursor-pointer hover:bg-transparent'
      onClick={() => startTransition(() => signOut())}
      disabled={isPending}
  >
      <LogoutIcon/> {isPending ? "Logging out..." : "Logout"}

    </Button>
  );
}

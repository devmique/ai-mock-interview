import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
<Link href="/">
  <Button className="bg-transparent text-white hover:bg-transparent cursor-pointer"><ArrowBackIcon/></Button>
</Link>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        type="generate"
      />
    </>
  );
};

export default Page;
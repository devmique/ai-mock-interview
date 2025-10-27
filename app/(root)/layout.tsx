import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
const RootLayout = async ({children}: {children: React.ReactNode}) => {

  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect("/sign-in")
  return (
    <div className="root-layout">

     <nav>
  
      <Link href="/" className="flex items-center gap-2">
<QuestionAnswerOutlinedIcon sx={{ fontSize: "40px" }} />
      <h2 className="text-primary">AInterview</h2>
      </Link>
    
     </nav>
     {children}
    </div>
  )
}

export default RootLayout

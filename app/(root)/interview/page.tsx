import React from 'react'
import Agent from '@/app/components/Agent'
const page = () => {
  return (
    <div>
        <h3>Interview Generation</h3>
      <Agent userName="You" userId="user1" type="generate"/>
    </div>
  )
}

export default page

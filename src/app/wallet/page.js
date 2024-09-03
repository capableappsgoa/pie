
import SidebarComp from '@/components/SidebarComp'
import { Wallet } from '@/components/Wallet'
import React from 'react'

const page = () => {
  return (
    <>
      <SidebarComp />
      <div className="p-4 sm:ml-64">
        <Wallet />
      </div>
    </>

  )
}

export default page
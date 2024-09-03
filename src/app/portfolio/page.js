
import { Portofio } from '@/components/Portfolio'
import { Properties } from '@/components/Properties'
import SidebarComp from '@/components/SidebarComp'
import { Sidebar } from 'flowbite-react'
import React from 'react'

const page = () => {
  return (
    <>
    <SidebarComp />
    <div className="p-4 sm:ml-64">
    <Portofio />
  </div>
    </>
  )
}

export default page
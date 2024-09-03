
import { Portofio } from '@/components/Portfolio'
import SidebarComp from '@/components/SidebarComp'
import { Sidebar } from 'flowbite-react'
import React from 'react'
import "../../components/Cards.css"
import { Properties } from '@/components/Properties'
const page = () => {
  return (
    <>
    <SidebarComp />
    <div className="p-4 sm:ml-64">
    <Properties />
    <Properties />
  </div>
    </>
  )
}

export default page
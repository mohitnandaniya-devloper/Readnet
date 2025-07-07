import React from "react"
import HeaderOrganism from "@/components/organisms/HeaderOrganism"
import FooterOrganism from "@/components/organisms/FooterOrganism"

import { Outlet } from "react-router-dom"

export default function LayoutTemplate() {
  return (
  <div>
      <HeaderOrganism/>
      <Outlet/>
      <FooterOrganism/>
  </div>
  )
}

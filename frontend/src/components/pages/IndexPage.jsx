import React from "react"
import HeroOrganism from "@/components/organisms/IndexPage/HeroOrganism"
import AccordionOrganism from "@/components/organisms/IndexPage/AccordionOrganism"
import ContactFormOrganism from "@/components/organisms/IndexPage/ContactFormOrganism"
import PopulerViewOrganism from "../organisms/IndexPage/PopulerViewOrganism"

export default function IndexPage() {
  return (
    <div>
      <HeroOrganism/>
      <PopulerViewOrganism/>
      <ContactFormOrganism/>
      <AccordionOrganism/>
    </div>
  )
}

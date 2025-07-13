import React from "react"
import HeroOrganism from "@/components/organisms/IndexPage/HeroOrganism"
import AccordionOrganism from "@/components/organisms/IndexPage/AccordionOrganism"
import ContactFormOrganism from "@/components/organisms/IndexPage/ContactFormOrganism"

export default function IndexPage() {
  return (
    <div>
      <HeroOrganism/>
      <ContactFormOrganism/>
      <AccordionOrganism/>
    </div>
  )
}

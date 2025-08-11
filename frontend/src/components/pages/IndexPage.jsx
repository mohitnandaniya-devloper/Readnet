import React from "react"
import HeroOrganism from "@/components/organisms/Index/HeroOrganism"
import AccordionOrganism from "@/components/organisms/Index/AccordionOrganism"
import ContactFormOrganism from "@/components/organisms/Index/ContactFormOrganism"

export default function IndexPage() {
  return (
    <div>
      <HeroOrganism/>
      <ContactFormOrganism/>
      <AccordionOrganism/>
    </div>
  )
}

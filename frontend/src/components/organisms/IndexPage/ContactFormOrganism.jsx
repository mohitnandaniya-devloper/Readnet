import React from "react"
import FormMolecule from "@/components/molecules/FormMolecule"

export default function ContactFormOrganism() {
  return (
    <section className="body-font relative">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Reach Out to Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Have a question or idea? Drop a message and I'll get back to you soon!
          </p>
        </div>
        <FormMolecule/>
      </div>
    </section>
  )
}

import React from "react";
import FormMolecule from "@/components/molecules/FormMolecule";
import data from "@/data/data.json";

export default function ContactFormOrganism() {
  return (
    <section className="bg-black text-white body-font relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-2">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-red-600 tracking-wide">
            {data.indexPage.contactFormSection.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300">
            {data.indexPage.contactFormSection.subtitle}
          </p>
        </div>
        <FormMolecule />
      </div>
    </section>
  );
}

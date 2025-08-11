import React from "react";
import data from "@/data/data.json";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionOrganism() {
  const accordionData = data.indexPage.accordionSection;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-0"
    >
      <section className="bg-black text-white body-font">
        <div className="container px-10 py-10 mx-auto">
          {Object.entries(accordionData).map(([title, description], index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-800"
            >
              <AccordionTrigger className="text-xl font-bold text-red-600 hover:text-red-700 transition-colors">
                {title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-gray-300 leading-relaxed">
                <p>{description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </section>
    </Accordion>
  );
}
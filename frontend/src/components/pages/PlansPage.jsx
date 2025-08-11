import React from "react";
import data from "@/data/data.json";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { Marquee } from "@/components/ui/marquee";
import { Confetti } from "@/components/ui/confetti";

export default function PricingSection() {
  const PLANS = data.pricingSection.plans;

  const handleConfetti = (planId) => {
    if (planId === "gold") Confetti();
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold text-red-600 mb-4">
            {data.pricingSection.title}
          </h1>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            {data.pricingSection.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col border-2 ${plan.accent} p-6 relative transition-all duration-300 rounded-2xl shadow-lg hover:shadow-red-700/40 bg-gray-900`}
            >
              {plan.tag && (
                <Badge className="absolute right-1 top-1 rounded-bl bg-gradient-to-r from-red-600 to-red-400 text-white px-3 py-1 text-xs uppercase tracking-wider shadow-md">
                  {plan.tag}
                </Badge>
              )}
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-bold tracking-wide text-red-800">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <div className="text-5xl font-bold text-white mb-4 border-b border-gray-700 pb-4">
                ${plan.price}
              </div>
              <CardContent className="flex-1 p-0 space-y-3">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <span className="w-5 h-5 mr-2 flex items-center justify-center bg-red-600 text-white rounded-full">
                      <Check className="w-3 h-3" />
                    </span>
                    {f}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="p-0 mt-6 flex flex-col">
                <PulsatingButton
                  onClick={() => handleConfetti(plan.id)}
                  className="w-full bg-red-600 hover:bg-red-500 text-white"
                >
                  Choose plan
                </PulsatingButton>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  No hidden fees. Cancel anytime.
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Marquee className="text-gray-500 text-sm">
            Binge-worthy access • Cancel anytime • Trusted by 1,000+ customers •
            Secure payments
          </Marquee>
        </div>
      </div>
    </section>
  );
}

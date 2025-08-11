import React from "react";
import VideoTextAtom from "@/components/atoms/VideoTextAtom";
import ButtonAtom from "@/components/atoms/ButtonAtom";
import data from "@/data/data.json";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function HeroOrganism() {
  const heroData = data.indexPage.heroSection;
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isSignedIn) {
      navigate("/plans");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <section className="bg-black text-white body-font">
      <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
        <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
          <VideoTextAtom children={heroData.title} src={heroData.video} />
        </div>
        <div className="text-center lg:w-2/3 w-full mt-8">
          <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-red-600 tracking-wide">
            {heroData.subtitle}
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            {heroData.context}
          </p>
          <div className="flex justify-center">
            <ButtonAtom
              onClick={handleGetStarted}
              children="Get Started"
              className="bg-red-600 text-white text-2xl font-medium py-4 px-8 rounded hover:bg-red-700 transition-colors duration-300 shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

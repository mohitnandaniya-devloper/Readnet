import React from "react";
import data from "@/data/data.json";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export default function FooterOrganism() {
  const footerData = data.indexPage.footerSection;
  const iconMap = {
    facebook: <FacebookIcon className="w-5 h-5" />,
    twitter: <TwitterIcon className="w-5 h-5" />,
    instagram: <InstagramIcon className="w-5 h-5" />,
    linkedin: <LinkedinIcon className="w-5 h-5" />
  };

  return (
    <footer className="bg-black text-gray-400 body-font border-t border-gray-800">
      <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row items-center">
        <p className="text-sm text-center sm:text-left">
          {footerData.copyright} —
          <a href={footerData.repoLink} rel="noopener noreferrer" className="ml-1 text-red-600 hover:underline" target="_blank">
            {footerData.repoText}
          </a>
        </p>
        <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 justify-center sm:justify-start">
          {footerData.socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 hover:text-white transition-colors duration-200"
            >
              {iconMap[social.icon]}
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}

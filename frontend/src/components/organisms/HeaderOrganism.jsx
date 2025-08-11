import React from "react";
import ButtonAtom from "@/components/atoms/ButtonAtom";
import SelectAtom from "@/components/atoms/SelectAtom";
import data from "@/data/info.json";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function HeaderOrganism() {
  const languageOptions = Object.entries(data.info.language).map(([value, label]) => ({
    value,
    label
  }));

  return (
    <header className="bg-black text-white body-font border-b border-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-bold items-center mb-4 md:mb-0">
          <span className="ml-3 text-4xl text-red-600 tracking-wider uppercase">
            {data.info.title}
          </span>
        </Link>
        <div className="md:ml-auto flex items-center text-base justify-center space-x-4">
          <SelectAtom
            defaultValue="en"
            options={languageOptions}
            className="bg-gray-900 text-white border border-gray-700 rounded px-2 py-1"
          />
          <SignedOut>
            <Link to="/sign-in">
              <ButtonAtom className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors duration-200">
                Sign In
              </ButtonAtom>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" appearance={{
              elements: { avatarBox: 'ring-2 ring-red-600' }
            }} />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

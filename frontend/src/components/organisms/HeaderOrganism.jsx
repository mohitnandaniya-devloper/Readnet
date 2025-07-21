import React from "react"
import ButtonAtom from "@/components/atoms/ButtonAtom"
import SelectAtom from "@/components/atoms/SelectAtom"

import { Link } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

export default function HeaderOrganism() {
  return (
    <header class="bg-muted/50 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center mb-4 md:mb-0">
            <span class="ml-3 text-4xl text-red-700">Readnet</span>
            </a>
<div className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
  <SelectAtom />
  <SignedOut>
    <Link to="/sign-in">
      <ButtonAtom
        children="Sign In"
        className="bg-red-600 text-white text-sm font-medium px-4 mx-2 rounded hover:bg-red-700"
      />
    </Link>
  </SignedOut>
  <SignedIn>
    <UserButton />
  </SignedIn>
</div>

        </div>
    </header>
  )
}
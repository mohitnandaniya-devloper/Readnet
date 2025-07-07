import React from "react"
import SearchFormAtom from "@/components/atoms/SearchFormAtom"

import { Navigate } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

export default function HeaderOrganism() {
  return (
    <header class="bg-muted/50 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center mb-4 md:mb-0">
            <span class="ml-3 text-xl">Readnet</span>
            </a>
            <div class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <SearchFormAtom />
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <Navigate to="sign-in" replace/>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}
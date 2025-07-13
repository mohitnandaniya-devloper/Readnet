import React from "react"

import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react"

export default function AuthPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-black">
      <SignedOut>
          <SignIn routing="path" path="/sign-in" />
          <SignUp routing="path" path="/sign-up" />
      </SignedOut>
      <SignedIn>
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">You are already signed in.</p>
          <a
            href="/"
            className="inline-block rounded bg-white px-4 py-2 text-black hover:bg-gray-200 transition"
          >
            Back to Home
          </a>
        </div>
      </SignedIn>
    </div>
  )
}
import React from "react"

import { useUser, RedirectToSignIn } from "@clerk/clerk-react";

export default function AuthClerkProtect({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  return isSignedIn ? children : <RedirectToSignIn />;
}

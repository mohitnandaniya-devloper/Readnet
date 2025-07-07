import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function AuthClerkProvider({ children }) {
  if (!PUBLISHABLE_KEY) {
  }
  
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </ClerkProvider>
  );
}
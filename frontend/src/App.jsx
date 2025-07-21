import React from "react"
import IndexPage from "@/components/pages/IndexPage"
import AuthPage from "@/components/pages/AuthPage"
import PlansPage from "@/components/pages/PlansPage"
import CollectionPage from "@/components/pages/CollectionPage"
import LayoutPage from "@/components/pages/LayoutPage"
import AuthClerkProvider from "@/auth/AuthClerkProvider"
import AuthClerkProtect from "@/auth/AuthClerkProtect"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
      <AuthClerkProvider>
        <Routes>
          <Route path="/sign-in/*" element={<AuthPage />} />
          <Route path="/sign-up" element={<AuthPage />} />
          <Route element={<LayoutPage />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/plans" element={
              <AuthClerkProtect>
                <PlansPage />
              </AuthClerkProtect>
            } />
            <Route path="/collection" element={
              <AuthClerkProtect>
                <CollectionPage />
              </AuthClerkProtect>
            } />
          </Route>
        </Routes>
      </AuthClerkProvider>
  )
}

export default App

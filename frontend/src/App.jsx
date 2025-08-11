import React from "react"
import IndexPage from "@/components/pages/IndexPage"
import AuthPage from "@/components/pages/AuthPage"
import PlansPage from "@/components/pages/PlansPage"
import CollectionPage from "@/components/pages/CollectionPage"
import CustomClerkWrapper from "@/provider/CustomClerkWrapper"
import AuthClerkProtect from "@/provider/CustomClerkProtect"
import LayoutTemplate from "@/components/templates/LayoutTemplate"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
      <CustomClerkWrapper>
        <Routes>
          <Route path="/sign-in/*" element={<AuthPage />} />
          <Route path="/sign-up" element={<AuthPage />} />
          <Route element={<LayoutTemplate />}>
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
      </CustomClerkWrapper>
  )
}

export default App

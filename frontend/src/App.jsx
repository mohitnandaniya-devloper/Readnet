import React from "react"
import IndexPage from "@/components/pages/IndexPage"
import AuthPage from "@/components/pages/AuthPage";
import PlansPage from "@/components/pages/PlansPage";
import LayoutTemplate from "@/components/templates/LayoutTemplate";
import AuthClerkProvider from "@/provider/AuthClerkProvider";
import CollectionPage from "@/components/pages/collectionPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <AuthClerkProvider>
        <Routes>
          <Route path="/sign-in/*" element={<AuthPage />} />
          <Route path="/sign-up" element={<AuthPage />} />
          <Route element={<LayoutTemplate />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/collection" element={<CollectionPage />} />
          </Route>
        </Routes>
      </AuthClerkProvider>
  )
}

export default App

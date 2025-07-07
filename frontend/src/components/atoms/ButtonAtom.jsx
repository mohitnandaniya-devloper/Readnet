import React from "react"
import { Button } from "@/components/ui/button"

export default function ButtonAtom({ children="Button Atom", ...props }) {
  return (
    <Button {...props}>{children}</Button>
  )
}

import React from "react"

export default function LableAtom({children, ...props}) {
  return (
    <label {...props}>{children}</label>
  )
}

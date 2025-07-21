import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectAtom() {
  return (
    <Select defaultValue="en">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="hi">Hindi</SelectItem>
        <SelectItem value="fr">French</SelectItem>
      </SelectContent>
    </Select>
  )
}

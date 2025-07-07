import React from "react"

import { VideoText } from "@/components/ui/video-text";

export default function VideoTextAtom({children="Readnet", ...props}) {
  return (
  <VideoText {...props}>{children}</VideoText>
  )
}
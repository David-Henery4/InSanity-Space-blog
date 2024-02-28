"use client"
import { useLiveMode } from "@sanity/react-loader"
import { useEffect } from "react"
import { client } from "../../../sanity/lib/client"
import { VisualEditing } from "next-sanity"


const stegaClient = client.withConfig({stega: true})

const LiveVisualEditing = () => {
  useLiveMode({client: stegaClient})
  //
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview" && window === parent){
      location.href = "/api/disable-draft";
    }
  }, [])
  //
  return (
    <VisualEditing zIndex={1000} />
  )
}

export default LiveVisualEditing
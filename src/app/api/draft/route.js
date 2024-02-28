import {draftMode} from "next/headers"
import { validatePreviewUrl } from "@sanity/preview-url-secret"
import { redirect } from "next/navigation"
import { client } from "../../../../sanity/lib/client"
import {token} from "../../../../sanity/lib/token"

const clientToken = client.withConfig({token})

// Might have to implement this in production:
// "Securely accessing it from your Headless CMS"
// Using a token secret

export async function GET(request){
  const {isValid, redirectTo = "/"} = await validatePreviewUrl(clientToken, request?.url)
  //
  if (!isValid){
    return new Response("Invalid Secret", {status: 401});
  }
  //
  draftMode().enable()
  //
  redirect(redirectTo)
}
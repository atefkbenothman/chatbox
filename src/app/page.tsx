"use server"

import { ChatBoxLeft } from "@/app/chat-box-left"
// import { ChatBoxRight } from "@/app/chat-box-right"

export default async function Home() {
  return (
    <div className="grid h-screen gap-x-8">
      <ChatBoxLeft />
      {/* <ChatBoxRight /> */}
    </div>
  )
}

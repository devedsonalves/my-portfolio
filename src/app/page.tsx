"use client"

import Navigation from "@/components/navigation";
import { useAppStore } from "@/stores/app-store";

export default function Home() {
  const { content } = useAppStore()

  return (
    <>
      <Navigation />
      <hr />
      { content }
    </>
  )
}

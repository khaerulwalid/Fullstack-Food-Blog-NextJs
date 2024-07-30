"use client"
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import { useSession } from "next-auth/react";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  const { data: session, status } = useSession()
  return (
    <div className={`px-5 sm:px-7 md:px-40 ${session ? 'mt-40 md:mt-5' : 'mt-5'}`}>
      <Hero />
      <Search />
    </div>
  )
}
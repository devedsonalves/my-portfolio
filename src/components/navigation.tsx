"use client"

import { NavigationType } from "@/types/navigation"
import { HomeIcon, RocketLaunchIcon, UserCircleIcon, WrenchIcon } from "@heroicons/react/24/solid"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import Banner from "./banner"
import AboutMe from "./about-me"
import Skills from "./skills"
import Projects from "./projects"
import { useState } from "react"

const navigation: NavigationType[]  = [
  { name: "inicio", component: <Banner />, icon: <HomeIcon/>, selected: true },
  { name: "sobre mim", component: <AboutMe />, icon: <UserCircleIcon/>, selected: false },
  { name: "habilidades", component: <Skills />, icon: <WrenchIcon/>, selected: false },
  { name: "projetos", component: <Projects />, icon: <RocketLaunchIcon/>, selected: false }
]

const idiom = [
  { name: "🇧🇷 PT-BR", value: "pt-BR" },
  { name: "🇺🇸 EN-US", value: "en-US" },
]

export default function Navigation() {
  const [language, setLanguage] = useState(idiom[0])

  return (
    <div className="fixed w-full top-0 left-0"> 
      <div className="sm:hidden">
        
      </div>

      <div className="hidden sm:flex w-full justify-between items-center gap-12 border-b px-24">
        <div className="px-4 py-2">
          <img
            src="logo-dark.png"
            alt="Logo Edson Alves"
            className="h-16 rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          {navigation.map((item) => (
            <button
              key={item.name}
              className={`
                px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-800 flex gap-2 rounded-lg uppercase cursor-pointer
                ${item.selected? "bg-stone-200" : "bg-transparent"}
              `}
            >
              <span className="size-5">{item.icon}</span>
              <p>{item.name}</p>
            </button>
          ))}
        </div>
        <div className="px-4 flex justify-center items-center">
          <Select>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder={language.name} />
            </SelectTrigger>
            <SelectContent>
              {idiom.map((item) => <SelectItem value={item.value}>{item.name}</SelectItem> )}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
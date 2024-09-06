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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Banner from "./banner"
import AboutMe from "./about-me"
import Skills from "./skills"
import Projects from "./projects"
import { useState } from "react"
import { useAppStore } from "@/stores/app-store"
import { Button } from "./ui/button"
import { AlignJustify } from "lucide-react"

const navigation: NavigationType[]  = [
  { name: "inicio", component: <Banner />, icon: <HomeIcon/>, selected: true },
  { name: "sobre mim", component: <AboutMe />, icon: <UserCircleIcon/>, selected: false },
  { name: "habilidades", component: <Skills />, icon: <WrenchIcon/>, selected: false },
  { name: "projetos", component: <Projects />, icon: <RocketLaunchIcon/>, selected: false }
]

const idiom = [
  { name: "🇧🇷 PT-BR", value: "pt-BR" },
  { name: "🇺🇸 EN-US", value: "en-US" }
]

export default function Navigation() {
  const [language, setLanguage] = useState(idiom[0])
  const { changeContent } = useAppStore()

  return (
    <div className="fixed w-full top-0 left-0 bg-white z-50"> 
      <div className="sm:hidden w-full flex justify-between items-center border-b px-4 py-2">
        <div>
          <img
            src="logo-dark.png"
            alt="Logo Edson Alves"
            className="h-16 rounded-full" />
        </div>
        <div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="border-b">
                  <SheetTitle className="pb-2">Menu</SheetTitle>
                </SheetHeader>
                <div className="pt-8">
                  <div className="border-b pb-4">
                    {navigation.map((item, index) => (
                      <div key={index} className="flex flex-col justify-center items-center pb-2">
                        <button
                          onClick={() => {
                            navigation.forEach((nav) => nav.selected = false)
                            item.selected = true
                            changeContent(item.component)
                          }}
                          key={item.name}
                          className={`
                            px-4 py-2 text-sm bg-stone-50 border font-medium text-black flex gap-2 w-full rounded-lg uppercase cursor-pointer
                            ${item.selected && " bg-stone-900 text-white"}
                          `}
                        >
                          <span className="size-5">{item.icon}</span>
                          <p>{item.name}</p>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={language.name} />
                      </SelectTrigger>
                      <SelectContent className="flex justify-start items-center">
                        {idiom.map((item, index) => <SelectItem key={index} value={item.value}>{item.name}</SelectItem> )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
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
              onClick={() => {
                navigation.forEach((nav) => nav.selected = false)
                item.selected = true
                changeContent(item.component)
              }}
              key={item.name}
              className={`
                px-4 py-2 text-sm font-medium text-black flex gap-2 rounded-lg uppercase cursor-pointer
                ${item.selected && "bg-stone-900 text-white"}
              `}
            >
              <span className="size-5">{item.icon}</span>
              <p>{item.name}</p>
            </button>
          ))}
        </div>
        <div className="px-4 flex justify-center items-center">
          <Select>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder={language.name} />
            </SelectTrigger>
            <SelectContent className="flex justify-start items-center">
              {idiom.map((item, index) => <SelectItem key={index} value={item.value}>{item.name}</SelectItem> )}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
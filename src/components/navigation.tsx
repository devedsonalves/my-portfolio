import { NavigationType } from "@/types/navigation"
import { HomeIcon, RocketLaunchIcon, UserCircleIcon, WrenchIcon } from "@heroicons/react/24/solid"

import Banner from "./banner"
import AboutMe from "./about-me"
import Skills from "./skills"
import Projects from "./projects"

const navigation: NavigationType[]  = [
  { name: "home", component: <Banner />, icon: <HomeIcon/>, selected: true },
  { name: "about me", component: <AboutMe />, icon: <UserCircleIcon/>, selected: false },
  { name: "skills", component: <Skills />, icon: <WrenchIcon/>, selected: false },
  { name: "projects", component: <Projects />, icon: <RocketLaunchIcon/>, selected: false }
]

export default function Navigation() {
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
                ${item.selected? "bg-gray-100" : "bg-transparent"}
              `}
            >
              <span className="size-5">{item.icon}</span>
              <p>{item.name}</p>
            </button>
          ))}
        </div>
        <div className="px-4 flex justify-center items-center">
          <select className="px-2 py-1 border rounded-lg bg-white" name="" id="">
            <option selected value="pt-BR">🇧🇷 PT-BR</option>
            <option value="es">🇺🇸 EN-US</option>
          </select>
        </div>
      </div>
    </div>
  )
}
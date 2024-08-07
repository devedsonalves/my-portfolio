import { ReactElement } from "react"

export type NavigationType = {
  name: string
  component: JSX.Element
  icon: ReactElement<SVGElement>
  selected: boolean
}
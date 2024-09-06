import Banner from '@/components/banner';
import create from 'zustand'

interface AppState {
  language: string
  setLanguage: (language: string) => void
  content: JSX.Element
  changeContent: (component: JSX.Element) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  language: 'pt-BR',
  setLanguage: (language) => set({ language }),
  content: Banner(),
  changeContent: (component) => {
    set({ content: component })
  },
}));

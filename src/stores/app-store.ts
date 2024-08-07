import create from 'zustand'

interface AppState {
  language: string
  setLanguage: (language: string) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  language: 'pt-BR',
  setLanguage: (language) => set({ language }),
}));

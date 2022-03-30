import create, { StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory({ window })

export interface AuthStore {
  isAuth: boolean
  toggleAuth: () => void
  go: (path: string) => void
  setSignin: () => void
}

const store: StateCreator<AuthStore> = (set) => ({
  isAuth: false,
  toggleAuth: () => set((state) => ({ isAuth: !state.isAuth })),
  go: (path: string) => history.push(path),
  setSignin: () => {
    set({ isAuth: true })
    history.push('/about')
  },
})

export const useAuthStore = create(devtools(store))

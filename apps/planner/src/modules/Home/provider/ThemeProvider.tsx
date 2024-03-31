import { createContext } from "react";
import { IThemeContext } from "./types";

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export function ThemeProvider({children}: React.PropsWithChildren) {
  return (
    <ThemeContext.Provider value={{ darkMode: true }}>
      {children}
    </ThemeContext.Provider>
  )
}

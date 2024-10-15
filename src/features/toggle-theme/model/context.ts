import { createContext } from "react";
import { themeType } from "./types";

export const defaultTheme: themeType = 'light';

interface ThemeContextType {
    theme: themeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    toggleTheme: () => { },
});

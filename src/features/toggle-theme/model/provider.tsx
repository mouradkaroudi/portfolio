import { ReactNode } from "react";
import { ThemeContext } from "./context";
import { useTheme } from "./hooks";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const { theme, toggleTheme } = useTheme()

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
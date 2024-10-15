import { useEffect, useState } from "react";
import { defaultTheme } from "./context";
import { themeType } from "./types";

export const useTheme = () => {
    const [theme, setTheme] = useState<themeType>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? (savedTheme as themeType) : defaultTheme;
    });

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return { theme, toggleTheme };
};

import { useEffect, useState } from "react";
import { defaultTheme } from "./context";
import { themeType } from "./types";

export const useTheme = () => {
    const [theme, setTheme] = useState<themeType>(() => {
        // Check if window is defined to ensure we're in a browser environment
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme ? (savedTheme as themeType) : defaultTheme;
        }
        return defaultTheme; // Fallback to defaultTheme if not in a browser
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

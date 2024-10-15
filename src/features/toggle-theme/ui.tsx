import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "./model"

export const ToggleThemeButton = () => {

    const { theme, toggleTheme } = useTheme()

    const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon

    return (
        <button onClick={toggleTheme} className="w-7 h-7 flex justify-center items-center border border-black dark:border-white border-opacity-[0.12] dark:border-opacity-[0.12] hover:border-opacity-20 text-gray-500 hover:text-black dark:text-stone-400 hover:dark:text-white transition-all rounded-lg">
            <ThemeIcon className="w-4 h-4" />
        </button>
    )
}
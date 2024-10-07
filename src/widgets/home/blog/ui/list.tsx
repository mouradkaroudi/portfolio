import { Card } from "./card"

export const List = () => {
    return (
        <>
            <div className="flex justify-between mb-8">
                <h2 className="font-semibold text-xl leading-6">Blog</h2>
                <a href="#" className="flex items-center gap-2 h-7 px-3 border border-white border-opacity-[0.12] rounded-lg text-stone-400">
                    <span className="text-xs leading-3">Visit My Blog</span>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.875 3.5H3.0625C2.7144 3.5 2.38056 3.63828 2.13442 3.88442C1.88828 4.13056 1.75 4.4644 1.75 4.8125V10.9375C1.75 11.2856 1.88828 11.6194 2.13442 11.8656C2.38056 12.1117 2.7144 12.25 3.0625 12.25H9.1875C9.5356 12.25 9.86944 12.1117 10.1156 11.8656C10.3617 11.6194 10.5 11.2856 10.5 10.9375V6.125M4.375 9.625L12.25 1.75M12.25 1.75H9.1875M12.25 1.75V4.8125" stroke="#999999" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </a>
            </div>

            <div className="overflow-x-auto grid auto-cols-[318px] grid-rows-[1fr] gap-6 w-full">
                <Card />
                <Card />
                <Card />
            </div>

        </>
    )
}
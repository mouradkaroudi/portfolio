export const Card = () => {
    return (
        <div className="flex flex-col row-start-1 col-auto rounded-xl overflow-hidden">
            <div className="aspect-3/2 bg-white bg-opacity-25">

            </div>
            <div className="flex flex-col p-4 bg-white bg-opacity-[0.12] gap-4">
                <span className="uppercase font-medium text-stone-400 leading-3 text-sm">news</span>
                <h3>
                    <a href="#" className="text-white hover:underline font-semibold leading-6">
                        Unveiling Offbeat Destinations for the Adventurous Travele
                    </a>
                </h3>
            </div>
        </div>
    )
}
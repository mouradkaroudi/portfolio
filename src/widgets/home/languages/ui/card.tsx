import Image from "next/image";
import { LanguageType } from "../model";

type Props = {
    data: LanguageType
}

export const Card = ({ data }: Props) => {

    const {
        languageName,
        level,
        flagPath
    } = data;

    return (
        <div className="border border-black dark:border-white border-opacity-[0.12] dark:border-opacity-[0.12] p-4 flex gap-4 rounded-xl">
            <Image src={flagPath} width={24} height={24} className="rounded-full" alt={languageName} />
            <div className="flex justify-between gap-1 w-full items-center">
                <h3 className="leading-6">{languageName}</h3>
                <span className="text-sm leading-3 text-gray-500 dark:text-stone-400">{level}</span>
            </div>
        </div>
    )

}
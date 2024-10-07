import { TechStackType } from "../model";

type Props = {
    data: TechStackType
}

export const Card = ({ data }: Props) => {

    const {
        techTitle,
        description,
        icon: Icon
    } = data;

    return (
        <div className="border border-white border-opacity-[0.12] p-4 flex gap-4 rounded-xl">
            <Icon />
            <div className="flex flex-col gap-1">
                <h3 className="leading-6">{techTitle}</h3>
                <p className="text-sm leading-3 text-stone-400">{description}</p>
            </div>
        </div>
    )

}
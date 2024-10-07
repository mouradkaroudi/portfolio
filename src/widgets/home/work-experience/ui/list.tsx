import { DATA } from "../model/constants"
import { Card } from "./card"

export const List = () => {
    return (
        <div className="flex flex-col gap-6">
            {DATA.map((data, index) => (
                <Card data={data} key={`work-experience-${index}`} />
            ))}
        </div>
    )
}
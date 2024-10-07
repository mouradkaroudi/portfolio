import { DATA } from "../model"
import { Card } from "./card"

export const List = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            {DATA.map((data, index) => (
                <Card data={data} key={`tech-stack-${index}`} />
            ))}
        </div>
    )
}
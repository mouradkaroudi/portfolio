type WorkExperienceType = {
    jobTitle: string;
    company: string;
    location: string;
    description: string;
    employmentStartYear: string;
    employmentEndYear: string | null;
}

type Props = {
    data: WorkExperienceType
}

export const Card = ({ data }: Props) => {

    const {
        jobTitle,
        company,
        location,
        description,
        employmentStartYear,
        employmentEndYear
    } = data;

    return (
        <div className="sticky top-10 bg-white dark:bg-stone-950 border border-black dark:border-white border-opacity-[0.12] dark:border-opacity-[0.12] p-4 flex flex-col gap-4 rounded-xl">
            <div className="flex flex-col gap-1">
                <p className="text-sm leading-4 text-gray-500 dark:text-stone-400">{jobTitle}</p>
                <h3 className="leading-6">{company}, {location}</h3>
                <p className="text-sm leading-4 text-gray-500 dark:text-stone-400">{employmentStartYear}{employmentEndYear ? `-${employmentEndYear}` : ' - Current'}</p>
            </div>
            <p className="text-sm leading-6 text-gray-500 dark:text-stone-400">{description}</p>
        </div>
    )

}
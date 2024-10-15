import { ToggleThemeButton } from "@/features/toggle-theme";
import { About } from "@/widgets/home/about";
// import { BlogList } from "@/widgets/home/blog/ui";
import { LanguagesList } from "@/widgets/home/languages";
import { TechStackList } from "@/widgets/home/tech-stack";
import { WorkExperienceList } from "@/widgets/home/work-experience";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="py-16"></div>
      <div className="px-4">
        <div className="border dark:border-stone-800 flex  justify-between p-4 rounded-2xl max-w-[864px] mx-auto">
          <div className="flex items-center gap-4">
            <div>
              <Image width={56} height={56} src="/pic.jpeg" alt="Mourad Karoudi" className="rounded-2xl" />
            </div>
            <div>
              <h1 className="text-xl leading-4 font-semibold mb-2">Mourad Karoudi</h1>
              <ul className="list-none flex gap-2 text-gray-500 dark:text-stone-400 text-sm font-medium leading-4">
                <li>Full Stack Web & App Developer</li>
                <li>|</li>
                <li>Casablanca, Morocco 12:12 PM</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3 items-end">
            <a href="mailto:mouradkaroudi@gmail.com" className="flex rounded-lg gap-2 items-center border border-stone-800 h-7 px-3">
              <span className="w-2 h-2  rounded-full bg-green-600 "></span>
              <span className="text-xs leading-3">Send me and Email</span>
            </a>
            {
            /*
            <button className="flex items-center justify-center border border-white border-opacity-[0.12] dark:border-opacity-[0.12] w-7 h-7 rounded-lg bg-white bg-opacity-[0.12] hover:bg-opacity-[0.20]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00006 4.5C7.86745 4.5 7.74028 4.44732 7.64651 4.35355C7.55274 4.25979 7.50006 4.13261 7.50006 4C7.50006 3.86739 7.55274 3.74021 7.64651 3.64645C7.74028 3.55268 7.86745 3.5 8.00006 3.5C8.13267 3.5 8.25985 3.55268 8.35361 3.64645C8.44738 3.74021 8.50006 3.86739 8.50006 4C8.50006 4.13261 8.44738 4.25979 8.35361 4.35355C8.25985 4.44732 8.13267 4.5 8.00006 4.5ZM8.00006 8.5C7.86745 8.5 7.74028 8.44732 7.64651 8.35355C7.55274 8.25979 7.50006 8.13261 7.50006 8C7.50006 7.86739 7.55274 7.74022 7.64651 7.64645C7.74028 7.55268 7.86745 7.5 8.00006 7.5C8.13267 7.5 8.25985 7.55268 8.35361 7.64645C8.44738 7.74022 8.50006 7.86739 8.50006 8C8.50006 8.13261 8.44738 8.25979 8.35361 8.35355C8.25985 8.44732 8.13267 8.5 8.00006 8.5ZM8.00006 12.5C7.86745 12.5 7.74028 12.4473 7.64651 12.3536C7.55274 12.2598 7.50006 12.1326 7.50006 12C7.50006 11.8674 7.55274 11.7402 7.64651 11.6464C7.74028 11.5527 7.86745 11.5 8.00006 11.5C8.13267 11.5 8.25985 11.5527 8.35361 11.6464C8.44738 11.7402 8.50006 11.8674 8.50006 12C8.50006 12.1326 8.44738 12.2598 8.35361 12.3536C8.25985 12.4473 8.13267 12.5 8.00006 12.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            */}
          </div>
        </div>
      </div>
      <div className="py-20"></div>
      <div className="px-4">
        <div className="max-w-[798px] mx-auto">

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-semibold text-xl leading-6 sticky top-10">About</h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <About />
            </div>
          </div>
          <div className="py-10 md:py-16"></div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-semibold text-xl leading-6 sticky top-10">Work Experience</h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <WorkExperienceList />
            </div>
          </div>
          <div className="py-10 md:py-16"></div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-semibold text-xl leading-6 sticky top-10">Tech Stack</h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <TechStackList />
            </div>
          </div>
          <div className="py-10 md:py-16"></div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-semibold text-xl leading-6 sticky top-10">Languages</h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <LanguagesList />
            </div>
          </div>

          <div className="py-10 md:py-16"></div>
          {/*
          <div className="border-t-2 border-black dark:border-white border-opacity-[0.12] dark:border-opacity-[0.12]"></div>
          <div className="py-10 md:py-16"></div>
         <BlogList />
         */}
          <div className="py-8"></div>
          <footer className="py-10 border-t border-black dark:border-white border-opacity-[0.12] dark:border-opacity-[0.12]">
            <div className="flex justify-between items-center">
              <span className="text-stone-400 text-sm">© 2024  Mourad Karoudi. All rights reserved.</span>
              <ToggleThemeButton />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

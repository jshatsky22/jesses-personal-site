import * as React from "react";
import { v4 as uuid } from "uuid";
import { twMerge } from "tailwind-merge";
import SocialLinks from "./social-links";

interface HomeHeaderProps {
  activeTab?: string;
  tabs?: {
    label: string;
    onClick?: () => void;
  }[];
}

const HomeHeader = ({ activeTab, tabs }: HomeHeaderProps) => {
  return (
    <nav className="fixed top-0 flex w-full items-center justify-center gap-4 border-2 border-solid border-gray-400 bg-white py-10 text-4xl font-bold shadow-lg lg:gap-8">
      {tabs &&
        tabs.map((tab) => (
          <button
            key={uuid()}
            className={twMerge(
              "border-b-4 border-transparent hover:border-gray-400",
              `${tab.label === activeTab ? "border-gray-400" : ""}`
            )}
            onClick={tab.onClick}
          >
            {tab.label}
          </button>
        ))}
      {/*       <SocialLinks twitter={twitter} github={github} dev_to={devTo} /> */}
    </nav>
  );
};

export default HomeHeader;

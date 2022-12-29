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
    <div className="fixed top-0 z-50 w-full bg-white">
      <nav className="flex items-center justify-center gap-4 py-10 text-4xl font-bold">
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
      </nav>
      {/*       <SocialLinks twitter={twitter} github={github} dev_to={devTo} /> */}
    </div>
  );
};

export default HomeHeader;

import * as React from "react";
import Footer from "../footer";
import Header from "../header";

interface HomeLayoutProps {
  GreetingContent?: () => JSX.Element;
  firstName?: string;
  lastName?: string;
  sections?: {
    title: string;
    Section: React.ReactChild;
  }[];
}

const HomeLayout = ({
  GreetingContent,
  firstName,
  lastName,
  sections,
}: HomeLayoutProps) => {
  const [activeSection, setActiveSection] = React.useState(0);

  return (
    <div className="font-display relative min-h-screen">
      <Header
        activeTab={sections?.[activeSection].title}
        tabs={sections?.map((section) => ({
          label: section.title,
          onClick: () => setActiveSection(sections.indexOf(section)),
        }))}
      />
      <div className="flex bg-gradient-to-br from-gray-400 via-gray-600 to-blue-800 pt-[60px] pb-6 text-gray-50 md:h-full md:items-center">
        <div className="w-fulltext-gray-50 flex min-h-[30vh] flex-1 justify-center md:h-full md:items-center">
          {GreetingContent && <GreetingContent />}
        </div>
        <div className="flex-1 md:right-0 md:w-1/2">
          <div className="w-full px-20 pt-36 text-gray-800 md:min-h-[calc(100vh-152px)]">
            {sections?.[activeSection].Section}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Footer
          footerContainerStyle="absolute bottom-0"
          firstName={firstName}
          lastName={lastName}
        />
      </div>
    </div>
  );
};

export default HomeLayout;

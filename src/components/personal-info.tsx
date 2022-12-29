import * as React from "react";
import BioSection from "./bio-section";
import InfoSection from "./info-section";

interface PersonalInfoProps {
  twitter?: string;
  github?: string;
  devTo?: string;
  introduction?: string;
  home?: string;
  skills?: string[];
  interests?: string[];
  hobbies?: string[];
}

const PersonalInfo = ({
  twitter,
  github,
  devTo,
  introduction,
  home,
  skills,
  interests,
  hobbies,
}: PersonalInfoProps) => {
  return (
    <div className="flex-col content-center">
      <InfoSection title="Introduction">
        <p className="text-lg">{introduction}</p>
      </InfoSection>
      <InfoSection title="Bio">
        <BioSection
          home={home}
          skills={skills}
          interests={interests}
          hobbies={hobbies}
        />
      </InfoSection>
    </div>
  );
};

export default PersonalInfo;

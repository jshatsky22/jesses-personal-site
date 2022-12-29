import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
} from "@yext/pages";
import HomeLayout from "../components/layouts/home-layout";
import Greeting from "../components/greeting";
import PersonalInfo from "../components/personal-info";

export const config: TemplateConfig = {
  stream: {
    $id: "jesse-shatsky-stream",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "name",
      "c_headshot",
      "c_socialLinks",
      "c_shortBio",
      "c_longBio",
      "c_aboutMePhotos",
      "slug",
      "c_hobbies",
      "c_interests",
      "c_hometown",
      "c_currentlyResidingIn",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["jesse-shatsky"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "My Personal Site",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Home: Template<TemplateRenderProps> = ({ document }) => {
  const {
    name,
    c_shortBio,
    c_longBio,
    c_headshot,
    c_hobbies,
    c_interests,
    c_currentlyResidingIn,
    c_hometown,
  } = document;

  return (
    <HomeLayout
      GreetingContent={() => (
        <Greeting
          name={name}
          role="Senior Product Manager @ Yext"
          headshot={c_headshot}
        />
      )}
      sections={[
        {
          title: "Home",
          Section: (
            <PersonalInfo
              twitter="https://twitter.com/apav_dev"
              github="https://github.com/apav-dev"
              devTo="https://dev.to/apavlick"
              introduction={c_longBio}
              home="New York, NY"
              skills={["Yext", "React", "Typescript", "Deno"]}
              interests={c_interests}
              hobbies={c_hobbies}
            />
          ),
        },
        {
          title: "Blogs",
          Section: <></>,
        },
        {
          title: "My Work",
          Section: <></>,
        },
      ]}
    />
  );
};

export default Home;

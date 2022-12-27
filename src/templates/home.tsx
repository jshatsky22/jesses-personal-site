import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import HomeLayout from "../components/layouts/home-layout";
import Greeting from "../components/greeting";
import PersonalInfo from "../components/personal-info";

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

const Home: Template<TemplateRenderProps> = () => {
  return (
    <HomeLayout
      GreetingContent={() => (
        <Greeting name="Aaron" role="Developer Evangelist @ Yext" />
      )}
      sections={[
        {
          title: "Home",
          Section: (
            <PersonalInfo
              twitter="https://twitter.com/apav_dev"
              github="https://github.com/apav-dev"
              devTo="https://dev.to/apavlick"
              introduction="My name is Aaron and I'm a developer evangelist at Yext.
                This is my first Developer Relations role and I'm really
                enjoying it! We have a lot of cool, new tools for people looking
                to build websites and I'm excited to demonstrate how to use
                them. Before I started working at Yext, I worked as a software
                engineer at a bank and a healthcare company."
              home="New York, NY"
              skills={["Yext", "React", "Typescript", "Deno"]}
              interests={["Skiing", "Podcasts", "TV", "Music"]}
            />
          ),
        },
        {
          title: "Blogs",
          Section: <></>,
        },
      ]}
    />
  );
};

export default Home;

import * as React from "react";
import { Image, ImageType } from "@yext/pages/components";
import headshotUrl from "../assets/images/headshot.jpeg";

interface GreetingProps {
  name: string;
  role?: string;
  headshot?: ImageType;
}

const Greeting = ({ name, role, headshot }: GreetingProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 px-5 md:px-14">
      <div>
        {headshot ? (
          <Image
            className="rounded-full"
            image={headshot}
            layout={"aspect"}
            aspectRatio={1}
            width={200}
          />
        ) : (
          <img className="w-20 rounded-full" src={headshotUrl} />
        )}
      </div>
      <div className="text-7xl font-black">{name}</div>
      <div className="text-4xl font-black">{role}</div>
    </div>
  );
};

export default Greeting;

import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

export default function HomeCustomers() {
  return (
    <div className="max-w-[1200px] w-full mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Fillials",

    link: "https://stripe.com",
    bgImage: "/image/gymss.webp",
  },
  {
    title: "Team Classes",

    link: "https://netflix.com",
    bgImage: "/image/teamsGirl.jpg",
  },
  {
    title: "Join Us",

    link: "https://google.com",
    bgImage: "/image/girl.jpg",
  },
];

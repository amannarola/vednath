import React from "react";
import HomeSliders from "./components/HomeSliders";
import Services from "./components/services/page";
import HomeAbout from "./components/about/homeAbout";
import Dieases from "./components/dieases/Dieases";

export default async function Home() {
  return (
    <React.Fragment>
      <HomeSliders />
      <HomeAbout />
      <Services />
      <Dieases />

      {/* <ScreenDebugger /> */}
    </React.Fragment>
  );
}

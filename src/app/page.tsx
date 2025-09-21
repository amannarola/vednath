import React from "react";
import HomeSliders from "./components/HomeSliders";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import Services from "./components/services/page";
import HomeAbout from "./components/about/homeAbout";
import Dieases from "./components/dieases/Dieases";
import ScreenDebugger from "./components/ScreenDebugger";

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

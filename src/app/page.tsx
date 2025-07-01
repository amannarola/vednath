import React from "react";
import HomeSliders from "./components/HomeSliders";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import Services from "./services/page";
import HomeAbout from "./components/about/homeAbout";

export default async function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <HomeSliders />

      <HomeAbout />
      {/* <Services /> */}
      <Footer />
    </React.Fragment>
  );
}

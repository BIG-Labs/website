import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="We are a group of ITALIAN Developers"
        title="Supporting Open Source"
        text="While open source work may have benevolent results, it is not an act of charity. Releasing work as open source and the corresponding contribution process eventually result in a higher return on the initial investment made versus the alternative closed source process."
        btnText="Github"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="We ARE experts in blockchains technologies"
        title="Providing support to dApps"
        text="Tell us your needs and we will make them real. We have skills in Rust, Solidity, Javascript, Go and Python that allow us to implement a dApp from scratch."
        btnText="Contact Us"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Do you want a faster response"
        title="Chat with us on Discord"
        text="Discord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities. The most used Social Network used in Crypto."
        btnText="Contact"
      />
      <Footer />
    </>
  );
};

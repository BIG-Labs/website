import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";

const Footer = () => {
  return (
    
    <FooterContainer>
      <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">

        <div className="col-lg-3 col-sm-6">
            <FooterH2>Developers</FooterH2>
            <FooterLink href="https://github.com/0x7183" target="_blank">0x7183</FooterLink>
            <FooterLink href="https://github.com/toran777" target="_blank">toran777</FooterLink>
            <FooterLink href="https://github.com/Sp-ino" target="_blank">Sp-ino</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Interns</FooterH2>
            <FooterLink href="https://github.com/jiooji" target="_blank">Jiooji</FooterLink>
            <FooterLink href="https://github.com/demennu" target="_blank">Demennu</FooterLink>
            <FooterLink href="https://github.com/last-ancestor" target="_blank">Last Ancestor</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Contact Us</FooterH2>
            <FooterLink href="mailto:support@biglabs.eu" target="_blank">Mail</FooterLink>
            <FooterLink href="https://discordapp.com/users/193395570931400704" target="_blank">Discord</FooterLink>
            <FooterLink href="https://github.com/BIG-Labs" target="_blank">Phone</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="https://twitter.com/0x7183" target="_blank">Twitter</FooterLink>
            <FooterLink href="https://github.com/BIG-Labs" target="_blank">Github</FooterLink>
            <FooterLink href="https://github.com/BIG-Labs" target="_blank">TikTok</FooterLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text gray-text center-align">- Big Labs -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
    </FooterContainer>
  );
};

export default Footer;

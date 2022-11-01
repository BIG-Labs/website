import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
} from "./HeroElements";
import Video from "../../videos/bgvideo.mp4";
import "../../App.css";

const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <h1 className="h1-hero">Reaching Goals Made Easy</h1>
        <p className="hero-text">
          We provide solutions for every development phase, from design to production.
        </p>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Design</ServicesH2>
          <ServicesP> 
          We finalize schematics and select construction materials.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Development</ServicesH2>
          <ServicesP>
          We develop the whole project
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Implementation</ServicesH2>
          <ServicesP>
            We implement it making tests, adjustments and corrections.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

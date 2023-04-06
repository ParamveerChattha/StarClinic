import { listOfServices } from "./listOfServices";
import {
  StyledHeader,
  StyledOuterContainer,
  StyledInnerServiceContainer,
  StyledServiceBox,
  StyledImgDescription,
  StyledImg,
  StyledImgDiv,
} from "./styled";

export const Services = () => {
  return (
    <section id="Services">
    <StyledOuterContainer>
      <StyledHeader>Our Services</StyledHeader>
      <StyledInnerServiceContainer className="'col-lg-4">
        {listOfServices.map((service) => (
          <StyledServiceBox component="span" key={service.id}>
            <StyledImg src={service.src} />
            <StyledImgDiv>
              <StyledImgDescription>{service.name}</StyledImgDescription>
            </StyledImgDiv>
          </StyledServiceBox>
        ))}
      </StyledInnerServiceContainer>
    </StyledOuterContainer>
    </section>
  );
};

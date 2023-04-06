import React from "react";
import {
  ContactContainer,
  StyledBox,
  StyledTypography,
} from "./Contact.styled.js";

export const Contact = () => {
  return (
    <section id="ContactUs">
      <ContactContainer>
        <StyledBox>
          <StyledTypography>
            Dr.Paramjeet Kaur (BDS MIDA) <br />
            contact -00000 <br /> Address: # 410 <br /> Sector 80 SAS nagar{" "}
            <br /> Mohali
            <br /> Panjab
          </StyledTypography>
        </StyledBox>
      </ContactContainer>
    </section>
  );
};

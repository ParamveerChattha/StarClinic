import { useState } from "react";
import { AddPatient } from "./AddPatient";
import { SearchPatient } from "./SearchPatient";
import { StyledButton, StyledOuterContainer } from "./styled";

export const ManagePatientLanding = () => {
  const [isAddPatientActive, setIsAddPatientActive] = useState(false);
  const [isSearchPatientActive, setIsSearchPatientActive] = useState(false);

  return (
    <>
      <StyledOuterContainer>
        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            setIsAddPatientActive((prevState) => !prevState);
          }}
        >
          ADD NEW PATIENT
        </StyledButton>

        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            setIsAddPatientActive((prevState) => !prevState);
          }}
        >
          SEARCH PATIENT
        </StyledButton>
      </StyledOuterContainer>

      {isAddPatientActive && <AddPatient />}
    </>
  );
};

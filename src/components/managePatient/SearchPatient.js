import { Button } from "@mui/material";
import { StyledButton, StyledFormContainer } from "./styled";
import { useState } from "react";

export const SearchPatient = () => {
  const [listOfPatients, setListOfPatients] = useState();
  const searchPatients = () => {
    setListOfPatients([
      { firstName: "firstName", lastName: "lastName", dob: "DOB" },
    ]);
  };
  return (
    <>
      <h1>Search Patient</h1>
      <StyledFormContainer style={{ width: "20rem" }}>
        <input name="firstName" placeholder="first Name" />
        <input name="lastName" placeholder="last Name" />
        <input name="phone number" placeholder="phone Number" type="number" />
        <Button onClick={searchPatients}>Search</Button>
      </StyledFormContainer>

      {listOfPatients && <patientTable patientDetails={listOfPatients} />}
    </>
  );
};

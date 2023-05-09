import { Button } from "@mui/material";
import { StyledButton, StyledFormContainer } from "./styled";
import { useState } from "react";
import PatientTable from "./patientTable";

export const SearchPatient = () => {
  const [listOfPatients, setListOfPatients] = useState(
    [
      {
        firstName: "firstName1",
        lastName: "lastName1",
        phoneNumber: 99889933,
        gender: "male",
        age: 23,
        diagnosis: "pain in jadd",
        procedure: "rct",
      },

      {
        firstName: "firstName2",
        lastName: "lastName3",
        phoneNumber: 99889933,
        gender: "female",
        age: 29,
        diagnosis: "pain in gums",
        procedure: "scaling",
      },
    ],
    []
  );
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

      {listOfPatients && <PatientTable patientDetails={listOfPatients} />}
    </>
  );
};

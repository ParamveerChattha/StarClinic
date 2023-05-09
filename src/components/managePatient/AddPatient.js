import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import {
  StyledButton,
  StyledFormContainer,
  StyledInput,
  StyledSaveButton,
} from "./styled";
import { useEffect, useState } from "react";

export const AddPatient = () => {
  const [gender, setGender] = useState("female");

  const [patientDetails, setPatientDetails] = useState();

  const addPatientAction = (e) => {
    e.preventDefault();
    console.log(e);
    setPatientDetails({
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      gender: gender,
      phoneNumber: e.target[4].value,
      dob: e.target[5].value,
      address: e.target[6].value,
      diagnosis: e.target[7].value,
      procedure: e.target[8].value,
    });
  };

  useEffect(() => {
    console.log("patientDetails: ", patientDetails);
  }, [patientDetails]);

  return (
    <>
      <h1>Add Patient</h1>
      <form onSubmit={addPatientAction}>
        <StyledFormContainer>
          <StyledInput
            label="firstName"
            name="firstName"
            placeholder="First Name"
          />
          <StyledInput
            label="lastName"
            name="lastName"
            placeholder="Last Name"
          />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => {
              e.preventDefault();
              setGender(e.target.value);
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <StyledInput
            label="phone Number"
            name="phone Number"
            placeholder="phone Number"
            type="number"
          />
          <StyledInput label="age" name="age" placeholder="age" type="number" />
          <StyledInput label="address" name="address" placeholder="address" />
          <StyledInput
            label="diagnosis"
            name="diagnosis"
            placeholder="diagnosis"
          />

          <StyledInput
            label="procedure"
            name="procedure"
            placeholder="procedure"
          />

          <StyledSaveButton
            variant="contained"
            color="success"
            label="Save"
            type="submit"
          >
            {" "}
            Save{" "}
          </StyledSaveButton>
        </StyledFormContainer>
      </form>
    </>
  );
};

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { StyledButton, StyledFormContainer, StyledInput } from "./styled";
import { useState } from "react";

export const AddPatient = () => {
  const [name, setName] = useState();
  const [gender, setGender] = useState();

  const addPatientAction = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
  };

  return (
    <>
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
          <StyledInput
            label="diagnosis"
            name="diagnosis"
            placeholder="diagnosis"
          />

          <StyledInput label="ilaaj" name="ilaaj" placeholder="ilaaj" />

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

          <button label="Save" type="submit">
            {" "}
            Save{" "}
          </button>
        </StyledFormContainer>
      </form>
    </>
  );
};

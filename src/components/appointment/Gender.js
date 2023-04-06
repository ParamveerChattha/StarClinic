import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { StyledGenderContainer } from "./styled";

export const Gender = ({ setGender }) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => {
          e.preventDefault();
          setGender(e.target.value);
        }}
      >
        <StyledGenderContainer>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </StyledGenderContainer>
      </RadioGroup>
    </FormControl>
  );
};

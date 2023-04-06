import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { StyledReasonTextfield } from "./Reasons.styled";

export const Reason = ({ setReason }) => {
  const handleReasons = (reasons) => {
    console.log("reasons: ", reasons);
  };

  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={reasons}
      getOptionLabel={(option) => {
        return option;
      }}
      onChange={(event, newValue) => setReason(newValue)}
      renderInput={(params) => (
        <StyledReasonTextfield {...params} label="select Reasons" />
      )}
    />
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const reasons = [
  "tooth ache",
  "tooth decay",
  "RCT",
  "regular checkup",
  "others",
];

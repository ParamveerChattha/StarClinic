import { Button, Container, Input } from "@mui/material";
import styled from "styled-components";

export const StyledOuterContainer = styled(Container)({});

export const StyledButton = styled(Button)({
  colorScheme: "light",
  border: "solid",
  borderRadius: "1rem",

  height: "8rem",
  width: "20rem",
  textSizeAdjust: "auto",
});

export const StyledInput = styled(Input)({
  backgroundColor: "white",
  border: "solid",
  display: "grid",
});

export const StyledFormContainer = styled.div({
  marginTop: "3rem",
  display: "grid",
  width: "40rem",
  marginLeft: " 15rem",
  rowGap: "0.3rem",
});

export const StyledSaveButton = styled(Button)({
  width: "8rem",
  marginLeft: "20rem",
});

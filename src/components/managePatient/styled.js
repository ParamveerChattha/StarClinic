import { Button, Container, Input } from "@mui/material";
import styled from "styled-components";

export const StyledOuterContainer = styled(Container)({});

export const StyledButton = styled(Button)({
  colorScheme: "light",

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
  display: "grid",
  width: "40rem",
  marginLeft: " 15rem",
  rowGap: "0.3rem",
});

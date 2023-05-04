import { Button, Container, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const ClinicNameTypography = styled(Typography)({
  color: red,
});

export const StyledContainer = styled(Container)({
  background: "linear-gradient(180deg, #1f3238, transparent)",
});

export const FindButton = styled(Button)({
  marginTop: "1rem",
  marginRight: "2rem",
  backgroundColor: "yellow",
});

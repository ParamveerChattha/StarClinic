import {
  Box,
  Button,
  Container,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export const StyledImageBox = styled(Box)({
  height: "38rem",
  width: "60%",
});

export const StyledImage = styled("img")({
  maxHeight: "fitContent",
  height: "inherit",
  width: "inherit",
});

export const StyledFormContainer = styled(Box)({
  background: "white",
  width: "100%",
  marginLeft: "-30rem",
  zIndex: 1,
});

export const StyledBox = styled(Box)({
  background: "linear-gradient(3600deg, #1f3238, transparent)",
  width: "100%",
  height: "38rem",
});

export const StyledDivContainer = styled("div")({
  display: "flex",
  height: "38rem",
});

export const StyledAppointmentHeader = styled(Typography)({
  fontFamily: "fangsong",
  fontSize: "3rem",
  textAlign: "center",
  marginBottom: "8%",
});

export const StyledTextField = styled(TextField)({
  border: "solid",
  marginBottom: "2rem",
});

export const StyledButtonDiv = styled("div")({
  textAlign: "center",
});

export const StyledInputDiv = styled("div")({
  display: "inline-grid",
  marginLeft: "12.5%",
  width: "20rem",
});

export const StyledButton = styled(Button)({
  marginTop: "2rem",
  marginLeft: "1rem",
  marginRight: "1rem",
  minWidth: "9rem",
});

export const StyledAgeGenderDiv = styled("div")({
  display: "flex",
});

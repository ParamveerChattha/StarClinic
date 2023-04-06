import { Container, Toolbar, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledOuterContainer = styled(Container)({
  height: "40rem",
  backgroundColor: "#66b5e5!important",
});

export const StyledHeader = styled(Typography)({
  color: "white",
  textAlign: "center",
  paddingTop: "1rem",
  fontSize: "2rem",
});

export const StyledInnerServiceContainer = styled("div")({
  marginTop: "4rem",
  marginLeft: "5rem",
  display: "flex",
  flexWrap: "wrap",
  textAlign: "center",
});

export const StyledServiceBox = styled(Box)({
  marginBottom: "5rem",
  alignItems: "center",
  minWidth: "15rem",
});

export const StyledImgDescription = styled(Typography)({
  fontSize: "1.6rem",
  color: "white",
});

export const StyledImgDiv = styled(Box)({
  width: "9rem",
  marginLeft: "20%",
});

export const StyledImg = styled("img")`
  cursor: pointer;
  border: solid;
  border-color: white;
  border-radius: 50%;
  max-height: 100px;
  max-width: 100px;
  &:hover {
    transition: scale(1.5);
  }
`;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { ClinicNameTypography, StyledContainer } from "./Navbar.styled";
import Appointment from "./Appointment";
import Feedbacks from "./feedbacks/Feedbacks";

const pages = ["Services", "Feedbacks", "ContactUs"];

export const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledContainer className="NavbarContainer" maxWidth="xl">
        <Toolbar disableGutters>
          <ClinicNameTypography
            className="ClinicName"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Star Dental Clinic
          </ClinicNameTypography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <a href={`#${page}`}>
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </StyledContainer>
    </AppBar>
  );
};

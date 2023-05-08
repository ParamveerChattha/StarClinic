import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./Navbar.css";
import {
  ClinicNameTypography,
  FindButton,
  StyledContainer,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import { Login } from "./navbar/Login";

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
          <Login />
          <Link to="PatientSearch">
            <FindButton>Manage Patient</FindButton>
          </Link>
        </Toolbar>
      </StyledContainer>
    </AppBar>
  );
};

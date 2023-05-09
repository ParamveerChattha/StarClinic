import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styledPatientTable";
import { useEffect } from "react";

const PatientTable = ({ patientDetails }) => {
  useEffect(() => {
    console.log("patientDetails: ", patientDetails);
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">gender</StyledTableCell>
              <StyledTableCell align="right">phone Number</StyledTableCell>
              <StyledTableCell align="right">diagnosis</StyledTableCell>
              <StyledTableCell align="right">procedure</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientDetails.map(
              ({
                firstName,
                lastName,
                gender,
                phoneNumber,
                diagnosis,
                procedure,
              }) => (
                <StyledTableRow key={firstName}>
                  <StyledTableCell component="th" scope="row">
                    {firstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{lastName}</StyledTableCell>
                  <StyledTableCell align="right">{gender}</StyledTableCell>
                  <StyledTableCell align="right">{phoneNumber}</StyledTableCell>
                  <StyledTableCell align="right">{diagnosis}</StyledTableCell>
                  <StyledTableCell align="right">{procedure}</StyledTableCell>
                  <StyledTableCell align="center">
                    <button>view</button>
                    <button>edit</button>
                    <button>delete</button>
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PatientTable;

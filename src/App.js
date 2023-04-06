import "./App.css";
import { Appointment } from "./components/Appointment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Navbar } from "./components/Navbar";
import { StyledContainer } from "./app.styled";
import { Feedbacks } from "./components/feedbacks/Feedbacks";
import { Services } from "./components/services/Services";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <>
      <StyledContainer>
        <Navbar />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Appointment />
        </LocalizationProvider>
        <Services />

        <Feedbacks />
        <Contact />
      </StyledContainer>
    </>
  );
}

export default App;

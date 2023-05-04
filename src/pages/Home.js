import { Navbar } from "../components/Navbar";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Appointment } from "../components/Appointment";
import { Services } from "../components/services/Services";
import { Feedbacks } from "../components/feedbacks/Feedbacks";
import { Contact } from "../components/contact/Contact";

export function Home() {
  return (
    <>
      <Navbar />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Appointment />
      </LocalizationProvider>
      <Services />
      <Feedbacks />
      <Contact />
    </>
  );
}

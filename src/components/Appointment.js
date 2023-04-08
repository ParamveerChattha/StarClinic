import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import React, { useState, useEffect } from "react";
import {
  StyledAppointmentHeader,
  StyledBox,
  StyledButton,
  StyledButtonDiv,
  StyledDivContainer,
  StyledTextField,
  StyledInputDiv,
  StyledAgeGenderDiv,
} from "./Appointment.styled";
import { Age } from "./appointment/Age";
import { SwipeableCarousel } from "../common/SwipeableCarousel";
import { Gender } from "./appointment/Gender";
import { Reason } from "./appointment/Reason";
import { CrouselImageBox } from "./appointment/CrouselImageBox";
import { DentalImages } from "../data/DentalImages";

export const Appointment = () => {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [age, setAge] = useState(40);
  const [gender, setGender] = useState("Female");
  const [reason, setReason] = useState();
  const [appointDateAndTime, setAppointDateAndTime] = useState();
  const [contactError, setContactError] = useState(false);
  const [cancel, setCancel] = useState(false);

  const minAppointmentDate = dayjs().add(1, "day");
  const maxAppointmentDate = dayjs().add(14, "day");

  const minAppointmentTime = dayjs().set("hour", 10).startOf("hour");
  const maxAppointmentTime = dayjs().set("hour", 19).endOf("hour");

  useEffect(() => {}, [cancel]);

  const submitForm = () => {
    if (!contactError)
      window.alert("Appointment Detail Shared. you will receive a call");
  };
  const handleInputChange = (e) => {
    if (e.target.name === "Contact" && /^[-+]?[0-9]+$/.test(e.target.value)) {
      setContactError(false);
      setContact(e.target.value);
    } else if (!isEmpty(e.target.value)) {
      setContactError(true);
    }
    if (e.target.name === "Name") {
      setName(e.target.value);
    }
  };

  const cancelForm = () => {
    setCancel((cancel) => !cancel);
  };

  return (
    <>
      <StyledDivContainer>
        <SwipeableCarousel
          swipeableContent={DentalImages}
          SwipeableInnerComponent={CrouselImageBox}
        />
        <StyledBox>
          <StyledAppointmentHeader>Book Appointment</StyledAppointmentHeader>
          <StyledInputDiv>
            <StyledTextField
              required
              id="outlined-basic"
              label="Name"
              name="Name"
              variant="standard"
              onChange={(e) => handleInputChange(e)}
            />
            <StyledTextField
              required
              id="outlined-basic"
              label="Contact"
              name="Contact"
              variant="standard"
              helperText={contactError ? "Incorrect entry." : null}
              onChange={(e) => handleInputChange(e)}
            />
            <StyledAgeGenderDiv>
              <Age age={age} setAge={setAge} /> <Gender setGender={setGender} />
            </StyledAgeGenderDiv>
            <Reason setReason={setReason} />
            <DateTimePicker
              minDate={minAppointmentDate}
              maxDate={maxAppointmentDate}
              minTime={minAppointmentTime}
              maxTime={maxAppointmentTime}
              label="choose the date and time"
              onChange={(newval) =>
                setAppointDateAndTime(dayjs(newval).toString())
              }
            />
          </StyledInputDiv>
          <StyledButtonDiv>
            <StyledButton
              variant="contained"
              color="success"
              onClick={(e) => {
                e.preventDefault();
                submitForm();
              }}
            >
              BOOK
            </StyledButton>
            <StyledButton
              variant="contained"
              color="error"
              onClick={(e) => {
                e.preventDefault();
                cancelForm();
              }}
            >
              CANCEL
            </StyledButton>
          </StyledButtonDiv>
        </StyledBox>
      </StyledDivContainer>
    </>
  );
};

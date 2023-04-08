import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Ratings } from "../ratings/Ratings";
import { StyledFeedbackCard } from "./FeedbackCard.styled";

export const FeedbackCard = ({ step }) => {
  console.log("patientFeedback", step);
  return (
    <StyledFeedbackCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {step.feedbackCaption} {<Ratings ratingVal={step.ratingLabel} />}
        </Typography>
        <Typography variant="h5" component="div">
          {step.fullName}
        </Typography>

        <Typography variant="body2">well meaning and kindly.</Typography>
      </CardContent>
    </StyledFeedbackCard>
  );
};

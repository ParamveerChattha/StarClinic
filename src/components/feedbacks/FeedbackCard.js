import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Ratings } from "../ratings/Ratings";
import {
  StyledFeedbackCard,
  StyledFeedbackContentBox,
  StyledFeedbackbackground,
  StyledRatingBox,
} from "./FeedbackCard.styled";

export const FeedbackCard = ({ step }) => {
  return (
    <StyledFeedbackbackground>
      <StyledFeedbackCard>
        <StyledFeedbackContentBox>
          <StyledRatingBox>
            {<Ratings ratingVal={step.ratingLabel} />}
          </StyledRatingBox>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {step.fullName}
          </Typography>
          <Typography variant="h5" component="div">
            {step.feedbackCaption} {<br />}
          </Typography>
          {<br />}
          {<br />}
          <Typography variant="body2">{step.feedbackDescription}</Typography>
        </StyledFeedbackContentBox>
      </StyledFeedbackCard>
    </StyledFeedbackbackground>
  );
};

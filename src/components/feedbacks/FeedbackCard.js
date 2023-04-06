import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Ratings } from "../ratings/Ratings";
import { StyledFeedbackContainer } from "./FeedbackCard.styled";

export const FeedbackCard = () => {
  return (
    <StyledFeedbackContainer>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Awesome Treatment {<Ratings value={5} />}
          </Typography>
          <Typography variant="h5" component="div">
            PATIENT NAME
          </Typography>

          <Typography variant="body2">well meaning and kindly.</Typography>
        </CardContent>
      </Card>
    </StyledFeedbackContainer>
  );
};

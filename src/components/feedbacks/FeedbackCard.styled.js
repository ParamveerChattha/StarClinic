import { Box, Card, CardContent, styled } from "@mui/material";

export const StyledFeedbackbackground = styled(Box)({
  backgroundColor: "white",
  height: "28rem",

  overflow: "visible",
  marginLeft: "20%",
  marginRight: "25%",
});

export const StyledFeedbackCircle = styled("div")({
  marginTop: "2rem",
  border: "solid",
  borderRadius: "50%",
  height: "25rem",
});

export const StyledFeedbackContentBox = styled(Box)({
  marginLeft: "17%",
  marginTop: "4%",
});

export const StyledRatingBox = styled(Box)({
  marginLeft: "20%",
});

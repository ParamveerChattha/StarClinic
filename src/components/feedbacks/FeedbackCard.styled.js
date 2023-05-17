import { Box, Card, CardContent, styled } from "@mui/material";

export const StyledFeedbackbackground = styled(Box)({
  backgroundColor: "white",
  height: "24rem",

  overflow: "visible",
  marginLeft: "50%",
});

export const StyledFeedbackCircle = styled("div")({
  marginTop: "4rem",
  border: "solid",
  borderRadius: "50%",
  height: "18rem",
});

export const StyledFeedbackContentBox = styled(Box)({
  marginLeft: "17%",
  marginTop: "4%",
});

export const StyledRatingBox = styled(Box)({
  marginLeft: "20%",
});

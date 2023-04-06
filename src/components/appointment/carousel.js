import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { StyledCarouselBox } from "./styled";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    id: "1",
    imgPath: "./clinic1.webp",
  },
  {
    id: "2",
    imgPath: "clinic2.jpeg",
  },
  {
    id: "3",
    imgPath: "clinic3.jpeg",
  },
  {
    id: "4",
    imgPath: "clinic4.webp",
  },
  {
    id: "5",
    imgPath: "clinic5.jpeg",
  },
];

export const SwipeableImages = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <StyledCarouselBox sx={{ wdith: "45rem" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "45rem",
                  height: "38rem",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </StyledCarouselBox>
  );
};

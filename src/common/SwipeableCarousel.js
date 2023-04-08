import * as React from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { StyledCarouselBox } from "./styled";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const SwipeableCarousel = ({
  swipeableContent,
  SwipeableInnerComponent,
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <StyledCarouselBox>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {swipeableContent.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <SwipeableInnerComponent step={step} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </StyledCarouselBox>
  );
};

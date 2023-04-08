import React from "react";
import { FeedbackCard } from "./FeedbackCard.js";
import {
  CarouselBox,
  DummyBox,
  StyledFeedbackContainer,
  StyledInnerContainer,
} from "./Feedback.styled.js";
import { SwipeableCarousel } from "../../common/SwipeableCarousel.js";
import { feedbackData } from "../../data/feedbackData.js";

export const Feedbacks = () => {
  return (
    <section id="Feedbacks">
      <StyledFeedbackContainer>
        <DummyBox />
        <CarouselBox>
          <SwipeableCarousel
            swipeableContent={feedbackData}
            SwipeableInnerComponent={FeedbackCard}
          />
        </CarouselBox>
      </StyledFeedbackContainer>
    </section>
  );
};

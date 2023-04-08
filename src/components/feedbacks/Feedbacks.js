import React from "react";
import { FeedbackCard } from "./FeedbackCard.js";
import {
  StyledFeedbackContainer,
  StyledInnerContainer,
} from "./Feedback.styled.js";
import { SwipeableCarousel } from "../../common/SwipeableCarousel.js";
import { feedbackData } from "../../data/feedbackData.js";

export const Feedbacks = () => {
  return (
    <section id="Feedbacks">
      <StyledFeedbackContainer>
        <SwipeableCarousel
          swipeableContent={feedbackData}
          SwipeableInnerComponent={FeedbackCard}
        />
      </StyledFeedbackContainer>
    </section>
  );
};

import React from "react";
import { FeedbackCard } from "./FeedbackCard.js";
import {
  StyledFeedbackContainer,
  StyledInnerContainer,
} from "./Feedback.styled.js";
import { SwipeableCarousel } from "../../common/SwipeableCarousel.js";

const customerRatings = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export const Feedbacks = () => {
  return (
    <section id="Feedbacks">
      <StyledFeedbackContainer>
        <StyledInnerContainer>
          <SwipeableCarousel
            swipeableContent={customerRatings.slice(0, 6)}
            SwipeableInnerComponent={FeedbackCard}
          />
        </StyledInnerContainer>
      </StyledFeedbackContainer>
    </section>
  );
};

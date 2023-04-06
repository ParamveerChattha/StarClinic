import { CourselData } from "./sampleData/crouselUserData";
import "./Crosel.css";
import { useState } from "react";

export const Crosel = () => {
  const [userDetails, setUserDetails] = useState(CourselData);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const crouselItemsOnDisplay = (userDetails) =>
    userDetails.slice(startIndex, endIndex);

  const moveCrousel = (e) => {
    if (e.target.name === "back" && startIndex != 0) {
      setStartIndex((prevIndex) => (prevIndex -= 1));
      setEndIndex((prevIndex) => (prevIndex -= 1));
      crouselItemsOnDisplay(userDetails);
    }
    if (e.target.name === "forward" && endIndex != userDetails.length) {
      setStartIndex((prevIndex) => (prevIndex += 1));
      setEndIndex((prevIndex) => (prevIndex += 1));
      crouselItemsOnDisplay(userDetails);
    }
  };
  return (
    <>
      <h1>crosel</h1>
      <div className="Container">
        <div className="ItemContainer">
          {crouselItemsOnDisplay(userDetails).map((userData, idx) => (
            <div className="Item" key={idx}>
              <p>{userData.name}</p>
            </div>
          ))}
        </div>
        <div className="ButtonContainer">
          <button onClick={(e) => moveCrousel(e)} name="back">
            {String.fromCharCode(8592)}
          </button>
          <button onClick={(e) => moveCrousel(e)} name="forward">
            {String.fromCharCode(8594)}
          </button>
        </div>
      </div>
    </>
  );
};

export default Crosel;

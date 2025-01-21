import React from "react";
import Banner from "../Banner/Banner";

function WinBanner({ numOfGuesses, handleReset }) {
  return (
    <Banner status="happy" action={handleReset} actionText="Restart Game">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinBanner;

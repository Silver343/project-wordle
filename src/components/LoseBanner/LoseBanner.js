import React from "react";
import Banner from "../Banner/Banner";

function LoseBanner({ answer, handleReset }) {
  return (
    <Banner status="sad" action={handleReset} actionText="Restart Game">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LoseBanner;

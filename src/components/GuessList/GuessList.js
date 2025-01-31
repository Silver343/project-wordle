import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} value={guesses[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;

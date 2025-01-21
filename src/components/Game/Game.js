import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList/GuessList";
import WinBanner from "../WinBanner/WinBanner";
import LoseBanner from "../LoseBanner/LoseBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(newGuess) {
    const newGuesses = [...guesses, newGuess];

    setGuesses(newGuesses);

    if (newGuess === answer) {
      setGameStatus("win");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  }
  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      {gameStatus === "win" && <WinBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lose" && <LoseBanner answer={answer} />}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;

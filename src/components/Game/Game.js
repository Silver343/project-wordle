import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import KeyBoard from "../Keyboard";
import WinBanner from "../WinBanner";
import LoseBanner from "../LoseBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const [gameStatus, setGameStatus] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [lettersUsed, setLettersUsed] = React.useState([]);

  function handleSubmitGuess(newGuess) {
    const newGuesses = [...guesses, newGuess];

    setGuesses(newGuesses);

    updateLettersUsed(newGuess);

    if (newGuess === answer) {
      setGameStatus("win");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  }

  function updateLettersUsed(guess) {
    const letters = checkGuess(guess, answer);

    const nextLettersUsed = [...lettersUsed, ...letters];

    setLettersUsed(nextLettersUsed);
  }

  function handleReset() {
    newAnswer = sample(WORDS);

    setAnswer(newAnswer);
    setGameStatus("");
    setGuesses([]);
    setLettersUsed([]);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      {gameStatus === "win" && (
        <WinBanner numOfGuesses={guesses.length} handleReset={handleReset} />
      )}
      {gameStatus === "lose" && (
        <LoseBanner answer={answer} handleReset={handleReset} />
      )}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <KeyBoard lettersUsed={lettersUsed} />
    </>
  );
}

export default Game;

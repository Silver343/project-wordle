import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ answer, value }) {
  const chars = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={chars ? chars[index].letter : undefined}
          status={chars ? chars[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;

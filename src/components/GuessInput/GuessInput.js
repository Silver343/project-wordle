import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [newGuess, setNewGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(newGuess);

    setNewGuess("");
  }
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={newGuess}
        required={true}
        maxLength={5}
        title="5 letter word"
        pattern="[a-zA-Z]{5}"
        onChange={(event) => {
          setNewGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

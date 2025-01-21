import React from "react";
import { KEYS } from "../../data";

function Key({ value, lettersUsed }) {
  const keyStatus = lettersUsed.find((char) => char.letter === value);

  const className = keyStatus ? `key ${keyStatus.status}` : "key";
  return <span className={className}>{value}</span>;
}

function Keyboard({ lettersUsed }) {
  return (
    <div className="keyboard">
      {KEYS.map((key) => (
        <Key key={key} value={key} lettersUsed={lettersUsed} />
      ))}
    </div>
  );
}

export default Keyboard;

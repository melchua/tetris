import React from "react";
import { useSelector } from "react-redux";

// Displays a message
export default function MessagePopup(props) {
  const isRunning = useSelector((state) => state.game.isRunning);
  const isGameOver = useSelector((state) => state.game.gameOver);

  let message = "";
  let isHidden = "hidden";

  if (isGameOver) {
    isHidden = "";
    message = "Game Over";
  } else if (!isRunning) {
    isHidden = "";
    message = "Paused";
  }

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
      <p>Message info...</p>
    </div>
  );
}

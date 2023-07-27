import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MidFeed.css";

export const MidFeed = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const submitFeedback = () => {
    if (feedbackText.trim() === "" || rating === 0) {
      alert("Por favor, insira seu feedback e avalie com emojis ou clique em sair.");
      return;
    }

   

    setFeedbackSubmitted(true);
  };

  const renderEmojis = () => {
    const emojis = ["😡", "🙁", "😐", "😃", "😄"];
    return emojis.map((emoji, index) => (
      <label key={index} htmlFor={`emoji${index}`} className={index + 1 === rating ? "emoji-selected" : ""}>
        {emoji}
        <input
          type="radio"
          name="rating"
          value={index + 1}
          id={`emoji${index}`}
          checked={index + 1 === rating}
          onChange={handleRatingChange}
          disabled={feedbackSubmitted}
        />
      </label>
    ));
  };

  return (
    <div className="containerfeed">
      <h1>Feedback</h1>
      <p>Deixe um comentário/sugestão e avalie com emojis:</p>
      <textarea
        value={feedbackText}
        onChange={handleFeedbackChange}
        placeholder="Digite aqui seu feedback..."
        disabled={feedbackSubmitted}
      />
      <div className="rating">{renderEmojis()}</div>
      <div className="button-container">
        <button onClick={submitFeedback} disabled={feedbackSubmitted}>
          {feedbackSubmitted ? "Feedback Enviado" : "Enviar Feedback"}
        </button>
        <Link to="/client" className="exit-button">
          Sair
        </Link>
      </div>
      {feedbackSubmitted && (
        <p className="thank-you">Muito obrigado pelo seu pedido! Até a próxima!</p>
      )}
    </div>
  );
};

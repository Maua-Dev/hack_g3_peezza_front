import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MidFeed.css";
import { addItem } from "../../../../back_operation_mock/repo_mock";

export const MidFeed = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const emojis = ["😡", "🙁", "😐", "😃", "😄"];

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleRatingChange = (event) => {
    console.log(event.target.value);
    setRating(Number(event.target.value));
  };

  const submitFeedback = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    let feedback = feedbackText;
    if (rating === 0) {
      alert("Por favor, insira seu feedback ou clique em sair.");
      return;
    }
    setFeedbackSubmitted(true);
    if (feedbackText.trim() === "") {
      setFeedbackText("Nenhum comentário foi enviado.");
      feedback = "Nenhum comentário foi enviado.";
    }
    addItem("Feedbacks", {Nota:rating, Comentário: feedback, Data: formattedDateTime})
    console.log(localStorage.getItem("Feedbacks"));
  };

  const renderEmojis = () => {
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

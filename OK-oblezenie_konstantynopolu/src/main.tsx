import React from "react";
import ReactDOM from "react-dom/client";
import QuestionPage from "./pages/QuestionPage";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QuestionPage />
  </React.StrictMode>
);

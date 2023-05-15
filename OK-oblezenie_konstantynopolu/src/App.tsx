import QuestionCard from "./QuestionCard";
import { Question } from "./Question";

import pytaniaEgzaminacyjne from "./data/termin-zerowy-2017-18.json";
import { useState } from "react";

function App() {
  let allQuestions = pytaniaEgzaminacyjne;
  let searchedQuestions = pytaniaEgzaminacyjne;

  let [searchInput, setSearchInput] = useState("");
  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    searchedQuestions = allQuestions.filter((question) => {
      return question.que.match(searchInput);
    });
  }

  function RenderCards(searchedQuestions: any) {
    try {
      return searchedQuestions.map((question: any) => {
        return <QuestionCard que={question.que} ans={question.ans} />;
      });
    } catch (error) {
      console.log(error);
      return <></>;
    }
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Wpisz szukane pytanie..."
        className="input input-bordered input-primary w-full m-4"
        value={searchInput}
        onChange={handleChange}
      />
      <div>{RenderCards(searchedQuestions)}</div>
    </div>
  );
}

export default App;

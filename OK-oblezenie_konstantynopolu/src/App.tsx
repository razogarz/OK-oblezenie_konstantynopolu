import QuestionCard from "./QuestionCard";

import pytaniaEgzaminacyjne from "./data/termin-zerowy-2017-18.json";
import { useState } from "react";

function App() {
  let allQuestions = pytaniaEgzaminacyjne;
  let searchedQuestions = pytaniaEgzaminacyjne;

  //rerender when searchInput changes
  let [searchInput, setSearchInput] = useState("");
  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function checkSearchInput(searchInput: string) {
    if (searchInput.length > 0) {
      //filter questions by matching searchInput
      searchedQuestions = allQuestions.filter((question) => {
        return question.que.match(searchInput);
      });
    }
  }
  checkSearchInput(searchInput);

  function RenderCards(searchedQuestions: any) {
    try {
      return searchedQuestions.map((question: any) => {
        return <QuestionCard que={question.que} ans={question.ans} />;
      });
    } catch (error) {
      console.log(error);
      return <h1>Wystąpił błąd, przepraszamy :c</h1>;
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

import QuestionCard from "../components/QuestionCard";
import { Question } from "../types/Question";
import pytaniaEgzaminacyjne from "../data/obkon-data.json";
import { useState } from "react";

function App() {
  let allQuestions: Question[] = pytaniaEgzaminacyjne;
  let searchMatchingQuestions: Question[] = pytaniaEgzaminacyjne;

  //rerender when searchInput changes
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function checkSearchInput(searchInput: string) {
    if (searchInput.length > 0) {
      //filter questions by matching searchInput
      searchMatchingQuestions = allQuestions.filter((question) => {
        return question.que.toLowerCase().match(searchInput.toLowerCase());
      });
      let input: any = searchInput.trim().split(" ");
      let search2: any[] = [];
      input.forEach((substr: string) => {
        Array.prototype.push.apply(
          search2,
          allQuestions.filter((question) => {
            return question.que.toLowerCase().match(substr.toLowerCase());
          })
        );
      });
      Array.prototype.push.apply(searchMatchingQuestions, search2);
      searchMatchingQuestions = [...new Set(searchMatchingQuestions)];
      return searchMatchingQuestions;
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
    <div className="max-w-full overflow-x-hidden">
      <input
        type="text"
        placeholder="Wpisz szukane pytanie..."
        className="input input-bordered input-primary w-full my-4"
        value={searchInput}
        onChange={handleChange}
      />
      <div>{RenderCards(searchMatchingQuestions)}</div>
    </div>
  );
}

export default App;

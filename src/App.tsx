import "./App.css";
import Header from "./components/Header";
import Question from "./components/Question";


function App() {
  return (
    <>
      <Header />
      <main className="max-w-2xl m-auto">

        <Question />
      </main>
    </>
  );
}

export default App;

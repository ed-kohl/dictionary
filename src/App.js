import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>

      <footer className="text-center">
        coded by Edeltraud Kohl, open sourced on{" "}
        <a href="https://github.com/ed-kohl/dictionary"> Github</a>
      </footer>
    </div>
  );
}

export default App;

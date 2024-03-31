import logo from "./logo.svg";

import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/easter-2319286_1280.jpg"}
          className="App-logo"
          alt="logo"
        />
      </header>
      <main>
        <Dictionary />
      </main>

      <footer className="text-center">coded by Edeltraud Kohl</footer>
    </div>
  );
}

export default App;

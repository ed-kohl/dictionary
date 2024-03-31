import logo from "./logo.svg";

import "./App.css";

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
      Dictionary
    </div>
  );
}

export default App;

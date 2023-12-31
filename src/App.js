import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Beth Ravelle and{" "}
            <a
              href="https://github.com/BethRavelle/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open sourced
            </a>{" "}
            on Github
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

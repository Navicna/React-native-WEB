import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const alerta = alert("Hello World!!!");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button onClick={() => setModalOpen(true)}>Exibir modal</button>
          <button onClick={() => setModalOpen(true)}>Remover modal</button>

          {modalOpen && alerta}
        </div>
      </header>
    </div>
  );
}

export default App;

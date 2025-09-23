import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const tmw = count + "%";

  return (
    <>
      <h1>Hellow Word!!!</h1>
      <h2>Netlify Teste Deploy 23/09/25</h2>
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>INCREMENT</button>
      </div>
      <div>
        <img width={tmw} src={logo} alt="Logo da empresa!" />
      </div>
    </>
  );

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}

export default App;

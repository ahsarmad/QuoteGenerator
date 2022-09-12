import "./App.css";
import Quotes from "./components/Quotes";

function App() {
  return (
    <section>
      <div className="App">
        <h1>Quote Generator</h1>
        <Quotes />
        <button>Generate!</button>
      </div>
      {/* Footer */}
    </section>
  );
}

export default App;

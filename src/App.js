import "./App.css";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";
import { data } from "./data/data";
import { useState } from "react";
import { useEffect } from "react";
import "./styles/styles.css";

function App() {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const randomize = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setQuote(data[randomNumber]);
  };

  useEffect(() => {
    randomize();
    setIsLoading(false);
  }, []);

  return (
    <section className="page">
      <div className="container">
        <h1>Quote Generator</h1>
        {isLoading ? (
          <p className="loading">Quote now loading...</p>
        ) : (
          <div className="quote-container">
            <Quotes data={quote} />
          </div>
        )}
        <button onClick={randomize}>Generate!</button>
      </div>
      <Footer />
    </section>
  );
}

export default App;

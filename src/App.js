import "./App.css";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

function App() {
  const data = [
    {
      name: "Sarmad",
      quote: '"This is an awesome quote"',
    },
    {
      name: "John Doe",
      quote: '"This is a good quote"',
    },
    {
      name: "Mouse",
      quote: '"This is a mouse quote"',
    },
    {
      name: "Dog",
      quote: '"This is a dog quote"',
    },
    {
      name: "Cat",
      quote: '"This is a cat quote"',
    },
    {
      name: "Bear",
      quote: '"This is a bear quote"',
    },
  ];

  return (
    <section>
      <div className="App">
        <h1>Quote Generator</h1>
        {/* Quote */}
        <Quotes data={data} />
        <button>Generate!</button>
      </div>
      {/* Footer */}
      <Footer />
    </section>
  );
}

export default App;

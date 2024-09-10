import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import { jokeDictionary } from "./interface/jokes";

function App() {
  const [count, setCount] = useState(0);

  const joke = jokeDictionary[count];
  setCount(count + 1);
  return (
    <>
      <div className="main-box">
        <div className="joke-box">
          <p>Joke # {joke.id}</p>
          <p>{joke.text}</p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;

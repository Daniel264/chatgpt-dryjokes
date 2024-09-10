import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import { jokeDictionary } from "./interface/jokes";
import Icons from "./components/Icons";

function App() {
  const [count, setCount] = useState(0);

  const joke = jokeDictionary[count];

  function handleClick() {
    if (count < jokeDictionary.length) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }
  return (
    <>
      <div className="main-box">
        <div className="joke-box">
          <div className="text-box">
            <p className="header">Joke # {joke.id}</p>
            <p>{joke.text}</p>
          </div>
          <div className="button-box">
            <Icons />
            <Button onClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

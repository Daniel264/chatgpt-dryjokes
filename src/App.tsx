import "./App.scss";
import Button from "./components/Button";
import Jokes from "./interface/jokes";
import { jokeDictionary } from "./interface/jokes";

function App() {
  const joke = jokeDictionary[0];
  return (
    <>
      <div className="main-box">
        <div className="joke-box">
          <p>Joke # {joke.id}</p>
          <p>
            {joke.text}
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;

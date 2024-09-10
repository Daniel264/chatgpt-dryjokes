import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="main-box">
        <div className="joke-box">
          <p>Joke #1</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
            itaque deleniti sint perspiciatis vitae doloremque inventore ad
            magni ab!
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;

import "../App.scss";

const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button onClick={onClick} className="btn">
        Next Joke
      </button>
    </div>
  );
};

export default Button;

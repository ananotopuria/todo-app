import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="todo">
        <button>Get Stated</button>
      </Link>
    </div>
  );
}

export default Home;

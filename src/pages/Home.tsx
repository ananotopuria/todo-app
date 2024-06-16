import { Link } from "react-router-dom";
import background from "../assets/pexels-catiamatos-1072179.jpg";
import "../App.css";

function Home() {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      <div className="flex flex-col items-center justify-center font-bold text-white relative z-10 text-center">
        <h1 className="text-6xl font-semibold block animate-moveInLeft animation-duration-1000 animation-timing-ease-out">
          TaskUP
        </h1>
        <p className="ext-2xl py-5 block animate-moveInRight animation-duration-1000 animation-timing-ease-out font-bold text-2xl mt-8">
          Organize, prioritize, and achieve with ease.
        </p>
        <Link to="todo">
          <button className="cursor-pointer my-[2rem] w-[130px] h-[40px] bg-[#07693d] rounded-lg text-white hover:bg-green-700 hover:translate-y-1 hover:shadow-lg">
          
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

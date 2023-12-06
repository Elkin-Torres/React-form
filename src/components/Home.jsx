import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="container__box">
          <div className="container__home-advertisement">
            <h1>Welcome to the best movie page on the internet!</h1>
            <p>
              On this page you will find any movie, serie or TV show you want,
              we have the best image and audio quality on the entire web, you
              just have to register to enjoy all our content, so what are you
              waiting for? Let&apos;s start with the fun!
            </p>
          </div>
          <div className="container__home-btns">
            <Link to={"/React-form/signin"}>
              <button>Sign In</button>
            </Link>
            <Link to={"/React-form/signup"}>
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

import Carousel from "components/Carousel";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="bg-primary text-primary container-fluid movie-app">
        <div className="row mw-25">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Home;

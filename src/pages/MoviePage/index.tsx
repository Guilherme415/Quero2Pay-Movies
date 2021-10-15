import Footer from "components/Footer";
import MovieComponent from "components/Movie";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

type params = {
  id: string;
};

const MoviePage = () => {
  const { id } = useParams<params>();

  return (
    <>
    <div className="bg-primary text-primary">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="text-primary">
            QueroMovies
          </Link>
        </div>
      </nav>
      <MovieComponent id={id ? Number.parseInt(id) : 0} />
      <Footer />
    </div>
    </>
  );
};

export default MoviePage;

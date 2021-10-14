import MovieComponent from "components/Movie";
import { useParams } from "react-router";

type params = {
  id:string
}

const MoviePage = () => {

  const {id} = useParams<params>();

  return (
    <>
      <MovieComponent id={id ? Number.parseInt(id) : 0}/>
    </>
  );
};

export default MoviePage;

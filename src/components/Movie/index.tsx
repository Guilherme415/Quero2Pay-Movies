import axios from "axios";
import IFrame from "components/iFrame";
import { useEffect, useState } from "react";
import { formatDate, Genre, MoviePorId } from "types/movies";
import { GET_GENRES, IMG_URL } from "utils/requests";

type props = {
  id: number;
};

const MovieComponent = ({ id }: props) => {
  const [page, setPage] = useState<MoviePorId>();
  const [genre, setGenre] = useState<Genre>();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fe65f8e840e15d06c5c00bf13084da74`).then((response) => {
      setPage(response.data);
    });
  }, [id]);

  useEffect(() => {
    axios.get(GET_GENRES).then((response) => {
      const data = response.data as Genre;
      setGenre(data);
    });
  }, []);
  console.log(page);

  return (
    <>
      <div className="container mt-5 mb-5">
            <div className="d-flex flex-wrap">
              <div className="flex-column justify-content-start flex-wrap w-25">
                <div>
                  <img src={`${IMG_URL}${page?.poster_path}`} alt="" />
                </div>
                <div>
                  <br />
                  <h6 className="text-secundary">TÍTULO ORIGINAL</h6>
                  <h4>{page?.title}</h4>
                  <h6 className="text-secundary">LÍNGUA ORIGINAL</h6>
                  <h4>{page?.original_language}</h4>
                  <h6 className="text-secundary">GÊNERO</h6>
                  <h4>
                    {page?.genres.map(
                      (x) => `${genre?.genres.find((y) => y.id === x.id)?.name} `
                    )}
                  </h4>
                  <h6 className="text-secundary">ADULTO</h6>
                  <h4>{page?.adult ? "Sim" : "Não"}</h4>
                  <h5 className="text-secundary">Release date:</h5>
                  <h4>{formatDate(page?.release_date)}</h4>
                </div>
              </div>

              <div className="filme-direita">
                <h1>{page?.title}</h1>
                <div className="separador"></div>
                <h6 className="text-secundary">SINOPSE</h6>
                <p>{page?.overview}</p>
                <p></p>
                <p></p>
                <IFrame id={id} language={page?.original_language}/>
              </div>
            </div>
      </div>
    </>
  );
};

export default MovieComponent;

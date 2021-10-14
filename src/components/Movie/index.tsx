import axios from "axios";
import IFrame from "components/iFrame";
import { useEffect, useState } from "react";
import { Genre, MoviePage } from "types/movies";
import { BASE_URL, GET_GENRES, IMG_URL } from "utils/requests";

type props = {
  id: number;
};

const MovieComponent = ({ id }: props) => {
  const [page, setPage] = useState<MoviePage>({
    page: 1,
    dates: "",
    total_pages: 0,
    total_result: 0,
  });
  const [genre, setGenre] = useState<Genre>();

  useEffect(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setPage(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(GET_GENRES).then((response) => {
      const data = response.data as Genre;
      setGenre(data);
    });
  }, []);

  console.log(page)

  return (
    <>
      <div className="container mt-5 mb-5">
        {page.results
          ?.filter((item) => item.id === id)
          .map((item) => (
            <div key={item.id} className="d-flex flex-wrap">
              <div className="flex-column justify-content-start flex-wrap w-30">
                <div>
                  <img src={`${IMG_URL}${item.poster_path}`} alt="" />
                </div>
                <div>
                  <br />
                  <h6 className="text-secundary">TÍTULO ORIGINAL</h6>
                  <h4>{item.title}</h4>
                  <h6 className="text-secundary">LÍNGUA ORIGINAL</h6>
                  <h4>{item.original_language}</h4>
                  <h6 className="text-secundary">GÊNERO</h6>
                  <h4>
                    {item.genre_ids.map(
                      (x) => `${genre?.genres.find((y) => y.id === x)?.name} `
                    )}
                  </h4>
                  <h6 className="text-secundary">ADULTO</h6>
                  <h4>{item.adult ? "Sim" : "Não"}</h4>
                  <h5 className="text-secundary">Release date:</h5>
                  <h4>{item.release_date}</h4>
                </div>
              </div>

              <div className="filme-direita">
                <h1>{item.title}</h1>
                <div className="separador"></div>
                <h6 className="text-secundary">SINOPSE</h6>
                <p>{item.overview}</p>
                <p></p>
                <p></p>
                <IFrame id={item.id} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieComponent;

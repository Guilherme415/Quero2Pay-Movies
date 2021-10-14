import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Genre, MoviePage } from "types/movies";
import { BASE_URL, IMG_URL, GET_GENRES } from "utils/requests";

const MoviePerCategory = () => {
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

  const naoExiste: number[] = [];

  genre?.genres.forEach(x => {
    let achou = false
    page.results?.forEach(y => {
      if(x.id === y.id){
        achou = true
      }
    })
    if(!achou){
      naoExiste.push(x.id)
    }
  })

  return (
    <>
      <div className="bg-primary">
        {genre?.genres.map((item) => (
          <div key={item.id}>
            <div className="text-primary container-fluid movie-app mh-25">
            <h1>{item.name}</h1>
              <div className="row mw-25 mh-25">
                <div className="d-flex">
                  {page.results
                    ?.filter((movie) => {
                      if (movie.genre_ids.find((x) => x === item.id))
                      return true;
                      else return false;
                    })
                    .filter((movie) => movie.poster_path != null)
                    .map((movie) => (  
                      <div
                      key={movie.id}
                      className="d-flex justify-content-start m-3"
                      >
                        <div className="flex-column">
                          <Link to={`/movies/${movie.id}`}>
                            <div className="image-container">
                              <img
                                src={`${IMG_URL}${movie.poster_path}`}
                                alt=""
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviePerCategory;

import axios from "axios";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movies";
import { BASE_URL, IMG_URL } from "utils/requests";

type props = {
  id:number
  }

const MovieComponent = ( {id}: props ) => {

  const [page, setPage] = useState<MoviePage>({
    page: 1,
    dates: "",
    total_page: 0,
    total_result: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setPage(response.data);
    });
  });

  return (
    <>
      <div>
        {page.results?.filter((item) => item.id === id)
          .map((item) => (
            <div key={item.id} className="d-flex justify-content-start m-3">
              <div className="flex-column">
                <div className="image-container">
                  <img src={`${IMG_URL}${item.poster_path}`} alt="" />
                </div>
                <h4>{item.title}</h4>
                <h5>Release date:</h5>
                <h4>{item.release_date}</h4>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieComponent;

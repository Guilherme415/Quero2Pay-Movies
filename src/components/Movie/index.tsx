import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "types/movies";
import { BASE_URL, IMG_URL } from "utils/requests";

const MovieComponent = (id: number) => {

  const [movie, setMovie] = useState<Movie[]>();
    
    useEffect(() => {
        axios.get(`${BASE_URL}`)
        .then((response) => {
          setMovie(response.data);
        });

        
    }, []);

    return (
      <>
        <div>
          <h1>Hello</h1>
          {movie?.filter((item) => item.id === id).map((item) => (
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
  
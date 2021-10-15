import axios from "axios";
import { useEffect, useState } from "react";
import { Video } from "types/movies";

type props = {
  id: number;
  language: string;
};

const IFrame = ({ id, language }: props) => {
  const [movie, setMovie] = useState<Video>();
  const [moviePt, setMoviePt] = useState<Video>();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=fe65f8e840e15d06c5c00bf13084da74&language=${language}`
      )
      .then((response) => {
        setMovie(response.data);
      });
  }, [id, language]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR`
      )
      .then((response) => {
        setMoviePt(response.data);
      });
  }, [id]);

  console.log('Movie = ' , moviePt?.results)

  return (
    <>
      <div>
        {moviePt?.results === undefined || moviePt?.results.length < 1 ? 
          <iframe
          width="100%"
          height="399px"
          src={`https://www.youtube.com/embed/${movie?.results?.[0].key}`}
          title={`${movie?.results?.[0].name}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>  
        :
          <iframe
            width="100%"
            height="399px"
            src={`https://www.youtube.com/embed/${moviePt?.results?.[0].key}`}
            title={`${moviePt?.results?.[0].name}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>  
      }
      </div>
    </>
  );
};

export default IFrame;

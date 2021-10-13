import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Genre, Genres, MoviePage } from "types/movies";
import { BASE_URL, IMG_URL, GET_GENRES } from "utils/requests";


const MoviePerCategory = () => {

    const [activePage, setActivePage] = useState(1);
    const [page, setPage] = useState<MoviePage>({ 
        page: 1,
        dates: "",
        total_page: 0,
        total_result: 0
    });
    const [genre, setGenre] = useState<Genre>();
    
    useEffect(() => {
        axios.get(`${BASE_URL}&page=${activePage}`)
        .then((response) => {
            setPage(response.data);
        });
    }, [activePage]);

    useEffect(() => {
        axios.get(GET_GENRES)
        .then((response) => {
            const data = response.data as Genre
            setGenre(data);
        });
    }, [])
    // console.log(page.results)
    // console.log('Type: ' , typeof(page.results))

    console.log(genre?.genres)
    console.log('Type: ' , typeof(genre?.genres))

    return (
      <>
        <div className="bg-primary">
            {genre?.genres.map((item) => (
                <div key={item.id}>
                    <div className="text-primary container-fluid movie-app mh-25">
                        <h1>{item.name}</h1>
                        <div className="row mw-25 mh-25">
                            <div className="d-flex">
                                {page.results?.filter((movie) => {
                                    if(movie.genre_ids.find((x) => x === item.id))
                                        return true
                                    else return false
                                })
                                .filter((movie) => movie.poster_path != null)
                                .map((movie) => (
                                    <div key={movie.id} className="d-flex justify-content-start m-3">
                                        <div className="flex-column">
                                            <Link to={`/movie/${movie.id}`}>
                                                <div className="image-container">
                                                    <img src={`${IMG_URL}${movie.poster_path}`} alt="" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> 
                    <br />
                    <br />
                </div>  
                ))}
        </div>
      </>
    );
};
  
export default MoviePerCategory;
  


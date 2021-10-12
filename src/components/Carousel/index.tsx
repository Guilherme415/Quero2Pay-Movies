import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movies";
import { BASE_URL, IMG_URL } from "utils/requests";

const Carousel = () => {

    const [activePage, setActivePage] = useState(1);
    const [page, setPage] = useState<MoviePage>({ 
        page: 1,
        dates: "",
        total_page: 0,
        total_result: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}&page=${activePage}`)
        .then((response) => {
            const data = response.data as MoviePage;
            console.log(response.data);
            console.log(activePage);
            setPage(response.data);
        });
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return (
      <>
      <div className="d-flex">
        {page.results?.map((movie) => (
                <div key={movie.id} className="d-flex justify-content-start m-3">
                    <img src={`${IMG_URL}${movie.poster_path}`} alt="movie" />
                    {/* <h3>{movie.title}</h3>
                    <h5>Release date:</h5>
                    <h4>{movie.release_date}</h4> */}
                </div>
            ))}
        
        <Pagination page={page} onPageChange={changePage}/>
      </div>
      </>
    );
};
  
export default Carousel;
  
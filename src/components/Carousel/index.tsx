import axios from "axios";
import NavBar from "components/NavBar";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviePage, SearchValue } from "types/movies";
import { BASE_URL, IMG_URL, SEARCH_URL } from "utils/requests";


const Carousel = () => {

    const [searchValue, setSearchValue] = useState<SearchValue>({
        searchValue: ''
    });
    const [activePage, setActivePage] = useState(1);
    const [page, setPage] = useState<MoviePage>({ 
        page: 1,
        dates: "",
        total_page: 0,
        total_result: 0
    });

    
    useEffect(() => {
        if(searchValue){
            axios.get(`${SEARCH_URL}&page=${activePage}&query=${searchValue}`)
            .then((response) => {
                const data = response.data as MoviePage;
                console.log(response.data);
                console.log(activePage);
                setPage(response.data);
            });
        }else{
            axios.get(`${BASE_URL}&page=${activePage}&query=avengers`)
            .then((response) => {
                const data = response.data as MoviePage;
                console.log(response.data);
                console.log(activePage);
                setPage(response.data);
            });
        }
    }, [activePage, searchValue]);

    const changePage = (index: number) => {
        setActivePage(index);
    }

    const changeSearch = (search: SearchValue) => {
        setSearchValue(search);
    }

    return (
      <>
      <NavBar search={searchValue} onSearchChange={changeSearch} />
      <div className="bg-primary text-primary container-fluid movie-app">
        <div className="row mw-25">
            <div className="d-flex">
                {page.results?.map((movie) => (
                        <div key={movie.id} className="d-flex justify-content-start m-3">
                            <div className="flex-column">
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={`${IMG_URL}${movie.poster_path}`} alt="" />
                                    <h4>{movie.title}</h4>
                                </Link>
                                <h5>Release date:</h5>
                                <h4>{movie.release_date}</h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
      </div>
        <Pagination page={page} onPageChange={changePage}/>
      </>
    );
};
  
export default Carousel;
  
import axios from "axios";
import NavBar from "components/NavBar";
import BackPage from "components/Pagination/backPage";
import NextPage from "components/Pagination/nextPage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviePage, SearchValue } from "types/movies";
import { BASE_URL, IMG_URL, SEARCH_URL } from "utils/requests";

const Carousel = () => {
  const [searchValue, setSearchValue] = useState<SearchValue>({
    searchValue: "",
  });
  const [activePage, setActivePage] = useState(1);
  const [page, setPage] = useState<MoviePage>({
    page: 1,
    dates: "",
    total_pages: 0,
    total_result: 0,
  });

  useEffect(() => {
    if (searchValue.searchValue !== "") {
      axios
        .get(`${SEARCH_URL}&page=${activePage}&query=${searchValue}`)
        .then((response) => {
          setPage(response.data);
        });
    } else {
      axios.get(`${BASE_URL}&page=${activePage}`).then((response) => {
        setPage(response.data);
      });
    }
  }, [activePage, searchValue]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  const changeSearch = (search: SearchValue) => {
    setSearchValue(search);
  };

  // const handleScroll = () => {
  //     if(window.innerWidth + document.documentElement.scrollWidth < document.documentElement.offsetWidth
  //         && page.page === page.total_page){
  //         return;
  //     }else{
  //         setActivePage(page.page += 1);
  //     }
  // }

  return (
    <>
      <NavBar search={searchValue} onSearchChange={changeSearch} />
      <div className="bg-primary text-primary container-fluid movie-app mh-25">
        <div className="row mw-25 mh-25">
          <div className="d-flex mt-3">
            <div className="mt-auto mb-auto">
              <BackPage page={page} onPageChange={changePage} />
            </div>
            {page.results
              ?.filter((movie) => movie.poster_path != null)
              .map((movie) => (
                <div
                  key={movie.id}
                  className="m-3"
                >
                  <div className="flex-column">
                    <Link to={`/movies/${movie.id}`}>
                      <div className="image-container">
                        <img src={`${IMG_URL}${movie.poster_path}`} alt="" />
                      </div>
                      <h4 className="text-primary">{movie.title}</h4>
                    </Link>
                    <h5 className="text-secundary">Release date:</h5>
                    <h4>{movie.release_date}</h4>
                  </div>
                </div>
              ))}
            <div className="mt-auto mb-auto">
              <NextPage page={page} onPageChange={changePage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

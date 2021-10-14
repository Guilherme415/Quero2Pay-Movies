import { MoviePage } from "types/movies";

type Props = {
    page: MoviePage;
    onPageChange: Function;
}

const BackPage = ({ page, onPageChange }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.page === 1 ? 'disabled' : ''} `}>
            {page.page === 1 ? null : 
                <button className="page-link" onClick={() => onPageChange(page.page -= 1)}>
                        <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="leftPage" width="30px"/>
                </button>
            }               
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BackPage;

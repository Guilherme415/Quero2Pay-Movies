import { MoviePage } from "types/movies";

type Props = {
    page: MoviePage;
    onPageChange: Function;
}

const NextPage = ({ page, onPageChange }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination bg-primary">
          <li className={`page-item ${page.page === page.total_pages ? 'disabled' : ''} `}>
            {page.page === page.total_pages ? null : 
                <button className="page-link" onClick={() => onPageChange(page.page += 1)}>
                <img src="https://cdn-icons-png.flaticon.com/512/157/157924.png" alt="nextPage" width="30px" />
                </button>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NextPage;

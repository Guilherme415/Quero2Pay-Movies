import { MoviePage } from "types/movies";

type Props = {
    page: MoviePage;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.page == 1 ? 'disabled' : ''} `}>
            <button className="page-link" onClick={() => onPageChange(page.page -= 1)}>Anterior</button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.page}</span>
          </li>
          <li className={`page-item ${page.page + 1 == null ? 'disabled' : ''} `}>
            <button className="page-link" onClick={() => onPageChange(page.page += 1)}>Próxima</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;

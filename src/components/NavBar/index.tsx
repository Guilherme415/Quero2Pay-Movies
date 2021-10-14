import { Link } from "react-router-dom";
import { SearchValue } from "types/movies";

type Props = {
  search: SearchValue;
  onSearchChange: Function;
}

const NavBar = ({ search, onSearchChange }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <Link to="/" className="text-primary">QueroMovies</Link>
        <form className="d-flex">
          <input
            className="form-control me-2" 
            type="search" placeholder="Search" 
            onChange={(event) => {onSearchChange(event?.target.value)}}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;

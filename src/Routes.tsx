import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import MoviePage from "pages/MoviePage";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path={`/movies/`}>
                    <MoviePage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  };
  
  export default Routes;
import { Route, Routes } from 'react-router';
import Home from '../Home/Home';

import NotFound from '../NotFound/notfound';
import { ComponentMainlayout } from '../Layout/Mainlayout';
import ComponentAbout from '../About/About';
import ComponentTeam from '../Team/ComponentTeam';
import ComponentMovieProvider from '../Movie/MovieProvider';
import ComponentMovieListProvider from '../Movie/MovieListProvider';
import WatchList from '../WatchList/WatchList';

const ComponentRouter = () => (
    <Routes>
        <Route path='/' element={<ComponentMainlayout />}>
            <Route index element={<Home />} />
            <Route
                path='search/:title'
                element={<ComponentMovieListProvider />}
            />
            <Route
                path={`/movie/:title/:id`}
                element={<ComponentMovieProvider />}
            />
            <Route path='watchlist' element={<WatchList />} />
            <Route path='about' element={<ComponentAbout />} />
            <Route path='team' element={<ComponentTeam />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    </Routes>
);

export default ComponentRouter;

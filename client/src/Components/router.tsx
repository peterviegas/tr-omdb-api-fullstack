import { Route, Routes } from 'react-router';
import Home from './Home/home';

import NotFound from './notfound';
import { ComponentMainlayout } from './mainlayout';
import ComponentAbout from './about';
import ComponentTeam from './Team/team';
import ComponentMovieProvider from './Movie/MovieProvider';
import ComponentMovieListProvider from './Movie/MovieListProvider';

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
            {/* <Route path='wishlist' element={} /> */}
            <Route path='about' element={<ComponentAbout />} />
            <Route path='team' element={<ComponentTeam />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    </Routes>
);

export default ComponentRouter;

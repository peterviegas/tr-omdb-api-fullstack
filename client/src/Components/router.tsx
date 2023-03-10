import { Route, Routes } from "react-router";
import Home from "./Home/home";

import NotFound from "./notfound";
import { ComponentMainlayout } from "./mainlayout";
import ComponentAbout from "./about";
import MovieList from "./Movie/MovieList";
import ComponentTeam from "./Team/team";


const ComponentRouter = () =>

    <Routes>

        <Route path="/" element={<ComponentMainlayout />} >

            <Route index element={<Home />} />
            <Route path="MovieList" element={<MovieList />} />
            <Route path="About" element={<ComponentAbout />} />
            <Route path="Team" element={<ComponentTeam />} />

            <Route path="*" element={<NotFound />} />

        </Route>

    </Routes >;

export default ComponentRouter;
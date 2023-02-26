import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MoviesPage} from "../pages/MoviesPage";
import {MovieInfo} from "./MovieInfo/MovieInfo";
import {UserInfo} from "./UserInfo/UserInfo";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'details/:id'} element={<MovieInfo/>}/>
                <Route path={'/movies/genre/:id'} element={<MoviesPage/>}/>
                <Route path={'search/keyword'} element={<MoviesPage/>}/>
                <Route path={'/userinfo'} element={<UserInfo/>}/>

            </Route>
        </Routes>
    );
};

export {RouteComponent};
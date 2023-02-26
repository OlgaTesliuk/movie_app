import React, {useState} from 'react';
import {Link} from "react-router-dom";
import css from './Header.module.css';
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Header = ({theme, switchTheme}) => {
    const [genresOn, setGenresOn] = useState(false);

    const {keyword} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(movieActions.setKeyword(e.target.value));
    };

    return (
        <div className={css.Header}>
            <button style={{marginRight: "100px", fontSize: "30px", textAlign: "start"}}
                    onClick={e => switchTheme(!theme)}>
                {theme ? 'BRIGHT' : 'DARK'}
            </button>
            <Link to={'/'}>Home</Link>
            <input style={{fontSize: "20px"}}
                   type="text"
                   placeholder="Search here"
                   onChange={handleChange}
                   value={keyword}/>
            <Link to={'search/keyword'} onClick={() => {
                dispatch(movieActions.setSearchActive())
            }}>search</Link>
            <Link onClick={() => {
                setGenresOn(!genresOn)
            }}>genres</Link>
            <Link to={'/userinfo'}>
                <div>
                    <img
                        style={{background: "black", width: 40, height: 40}}
                        src={'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}
                        alt={''}
                    />
                </div>
            </Link>
            {genresOn && <GenreBadge setGenresOn={setGenresOn}/>}
        </div>
    );
};

export {Header};
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


const initialState = {
    searchIsActive: false,
    keyword: "",
    movies: [],
    page: null,
    errors: null,
    loading: null,
    selectedMovie: {},
    details: false

}


const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByGenre(id, page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({keyword}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchKeyword(keyword);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.setSelectedMovie = action.payload
        },
        setDetails: (state, action) => {
            state.details = action.payload
        },
        setKeyword: (state, action) => {
            state.keyword = action.payload
        },
        setSearchActive: (state, action) => {
            state.searchIsActive = !state.searchIsActive
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                console.log("page: " + page, "results:" + results)
                state.movies = results
                state.page = page
                state.loading = false

            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page
                console.log("page: " + action.payload.page + "results:" + action.payload.results)
                // state.selectedMovie = results
                // state.loading = false
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
})
const {reducer: movieReducer, actions: {setSelectedMovie, setDetails, setKeyword, setSearchActive}} = movieSlice

const movieActions = {
    getMovies,
    getMoviesByGenre,
    setSelectedMovie,
    setDetails,
    searchMovie,
    setKeyword,
    setSearchActive
}
export {
    movieReducer,
    movieActions
}
import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/Movie.context';
import axios from 'axios';
import { useEffect,useContext } from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';


const MovieLayout =(props) => {

    const {id} =useParams();
    const {movie , setMovie} =useContext(MovieContext);

    useEffect(()=>{
        const requestMovie =async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
            // console.log(getMovieData.data);
        };
        requestMovie();
    }, [id]);

    return (
        <div>
           <MovieNavbar />
            {props.children}
            <div>Footer</div>

        </div>
    )

}
export default MovieLayout;
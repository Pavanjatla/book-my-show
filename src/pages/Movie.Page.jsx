import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useContext,useEffect,useState } from "react";
import { MovieContext } from "../context/Movie.context";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import {FaCcVisa ,FaCcAmazonPay} from "react-icons/fa";
import Slider from "react-slick";
import Cast from "../components/Cast/Cast.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const MoviePage =() =>{

    const {movie}=useContext(MovieContext);
    const {id} =useParams();

    const [cast ,setCast]=useState([]);

    const [similarMovies, setSimilarMovies] =useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

  

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    

    return(<>
        <MovieHero />
        <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-gray-800 font-bold text-2xl">
                    About the Movie
                </h1>
                <p>{movie.overview}</p>
            </div>
            <div className="my-8">
                <hr />

            </div>

            <div className="my-8">
                <h2 className="text-gray-800 font-bold text-2xl mb-3">
                    Applicable Offers
                </h2>
                
                <div className="flex flex-col gap-5 m-3 px-3 lg:flex-row">

                    <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                        <div className="w-8 h-8">
                            <FaCcVisa className="w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start ">
                            <h3 className="text-gray-800 text-xl font-bold">
                                Visa Stream Offer
                            </h3>
                            <p className="text-gray-600">
                                Pay using VISA CARD & win cashback upto INR 250* <br /> on minimum  purchase of INR 100.*T&C apply.

                            </p>

                        </div>
                    </div>
                    <div className="flex  items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                        <div className="w-8 h-8">
                            <FaCcAmazonPay className="w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start ">
                            <h3 className="text-gray-800 text-xl font-bold">
                                Amazon Pay Offer
                            </h3>
                            <p className="text-gray-600">
                                Pay using Amazon Pay Card & win cashback upto INR 250* <br /> on minimum  purchase of INR 100.*T&C apply.

                            </p>

                        </div>
                    </div>
                        
                    </div>


            </div>
            <div className="my-8">
                <hr />
            </div>

            <div className="my-8">
                <h2 className="text-gray-800 font-bold text-2xl mb-4">
                    Cast and Crew
                </h2>
                <Slider {...settingsCast}>
                    {cast.map((each)=>(
                        <Cast image={each.profile_path} castName={each.original_name} role={each.character} />
                    ))}

                </Slider>

            </div>
            <div className="my-8">
                <hr />
            </div>

            <div className="my-8">
                <PosterSlider config={settings} title="Recommended Movies" posters={similarMovies} isDark={false} />

            </div>

            <div className="my-8">
                <hr />
            </div>

            
               
        </div>
        
    </>)

}
export default MoviePage;
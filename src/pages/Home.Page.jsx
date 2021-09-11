import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';


function HomePage() {

    const [recommededMovies , setRecommededMovies] = useState([]);

    const [premiereMovies , setPremiereMovies] = useState([]);

    const [onlineStreamMovies , setOnlineStreamMovies] = useState([]);


    useEffect(() => {
        const requestPopularMovies =async ()=>{
            const getPopularMoies =await axios.get("/movie/popular");
            setRecommededMovies(getPopularMoies.data.results);
            
        }
        requestPopularMovies();
    })
    useEffect(() => {
        const requestTopRatedMovies =async ()=>{
            const getTopRatedMoies =await axios.get("/movie/top_rated");
            setPremiereMovies(getTopRatedMoies.data.results);

        }
        requestTopRatedMovies();
    })
    useEffect(() => {
        const requestUpComingMovies =async ()=>{
            const getUpComingMovies =await axios.get("/movie/upcoming");
            setOnlineStreamMovies(getUpComingMovies.data.results);

        }
        requestUpComingMovies();
    })
    

    return (
        <>

            <HeroCarousel />
            <div className="container mx-auto px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 my-3">
                    The Best Of Entertainment

                </h1>
                <EntertainmentCardSlider  />
            </div>
            <div className="container mx-auto px-12 my-8">
                <PosterSlider  
                        title="Recommended MOvies" 
                        subtitle="List of recommended Movies"
                        posters={recommededMovies}
                        isDark={false} />

            </div>
            <div className="bg-dark-800 py-12">
                <div className="container mx-auto px-12 my-8 flex flex-col gap-3">
                    <img 
                    src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                    alt="Rupay" 
                    className="w-full h-full" />
                     <PosterSlider  
                        title="Premiers" 
                        subtitle="Brand New Releases"
                        posters={premiereMovies}
                        isDark={true} />

                </div>

            </div>

            <div className="container mx-auto px-12 my-8">
                <PosterSlider  
                        title="Online Streams" 
                        subtitle="List of recommended Movies"
                        posters={onlineStreamMovies}
                        isDark={false} />

            </div>
        
        </>
            

    );
};

export default HomePage;

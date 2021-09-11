import axios from "axios";
import React, { useState,useEffect } from "react";
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from "./Arrows.Component";


const HeroCarousel =()=>{

    const [images , setImages]= useState([]);

    useEffect(() =>{
        const nowPlaying =async()=>{
            const getImages= await axios.get("/movie/now_playing");
            // console.log(getImages);
            setImages(getImages.data.results);

        };
        
        nowPlaying();

    },[]);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

       

      };

      const settings = {
        arrows:true,
        dots: true,
        slidesToShow:1,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        

      };

      return (
            <>
                <div className="lg:hidden">
                    <HeroSlider {...settings}>
                        { images.map((image) => (
                            <div className="w-full h-56 md:h-80 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Hero Banner" className="w-full h-full rounded-md object-center object-cover"/>

                            </div>
                        ))}
                    </HeroSlider>
                </div>
                <div className="hidden lg:block">
                    <HeroSlider {...settingsLG}>
                        {images.map((image) =>(
                            <div className="w-full h-96 px-2 py-3 ">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Hero Banner" className="w-full h-full rounded-md object-center object-cover" />

                            </div>

                        ))}

                    </HeroSlider>

                </div>
      
      
      </>
      );
};

export default HeroCarousel;
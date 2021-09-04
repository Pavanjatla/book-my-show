import React, { useState } from "react";
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from "./Arrows.Component";


const HeroCarousel =()=>{

    const [images , setImages]= useState([
        "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630436030240_dearmegha_incinemasthisfridayknowmore_webshowcase_1240x300.jpg",

    ]);

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
                                <img src={image} alt="Hero Banner" className="w-full h-full rounded-md object-center"/>

                            </div>
                        ))}
                    </HeroSlider>
                </div>
                <div className="hidden lg:block">
                    <HeroSlider {...settingsLG}>
                        {images.map((image) =>(
                            <div className="w-full h-96 px-2 py-3 ">
                                <img src={image} alt="Hero Banner" className="w-full h-full rounded-md object-center" />

                            </div>

                        ))}

                    </HeroSlider>

                </div>
      
      
      </>
      );
};

export default HeroCarousel;
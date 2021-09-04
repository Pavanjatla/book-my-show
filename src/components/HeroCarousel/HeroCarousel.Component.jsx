import React, { useState } from "react";
import HeroSlider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(){
    return(<>

    </>)
}
function PrevArrow(){
    return(<>
    
    </>)
}

const HeroCarousel =()=>{

    const [images , setImages]= useState([
        "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630436030240_dearmegha_incinemasthisfridayknowmore_webshowcase_1240x300.jpg",

    ]);

    const settingsLG = {
        arrows:true,
        autoplay:true,
        dots: true,
        centerMode:true,
        centerPadding:"100px",
        slidesToShow:1,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        PrevArrow : <PrevArrow />

      };

      const settings = {
        arrows:true,
        dots: true,
        slidesToShow:1,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        PrevArrow : <PrevArrow />

      };
}
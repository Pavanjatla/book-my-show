import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider =()=>{

    const PosterImages = [
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjglICA3MzEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00308822-bbujjtsfjz-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA1ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311839-uankdwgdkf-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTNrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00124885-wrhhlnyqqd-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjglICA3MzEgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00308822-bbujjtsfjz-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA1ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311839-uankdwgdkf-portrait.jpg",
    ];

    const settings ={
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return(
        <>  
            <div className="flex flex-col items-start my-2">
                <h3 className="text-2xl font-bold ">
                    Recommended Movies
                </h3>
                <p className="text-sm text-gray-800 ">
                    List Of Recommended Movies
                </p>
            </div>
            <Slider {...settings}>
                {PosterImages.map((image) =>(
                    <Poster src={image} />              
                     ))}
                
            </Slider>
        
        </>
    )
}

export default PosterSlider;
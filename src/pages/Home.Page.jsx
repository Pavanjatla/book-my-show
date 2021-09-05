import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';


function HomePage() {


    const posters = [
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
            title:"Shan-Chi and the legend of ten Rings",
            subtitle:"Action / Adventure / Fantacy"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA2ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
            title:"Fast and Furious 9",
            subtitle:"Action / Adventure / Crime / Thriller"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA4NjYgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00308822-bbujjtsfjz-portrait.jpg",
            title:"NOtokka Jillala Andagaadu",
            subtitle:"Comedy / Drama"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTNrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00124885-wrhhlnyqqd-portrait.jpg",
            title:"Seetimaar",
            subtitle:"Drama / Sport"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311839-uankdwgdkf-portrait.jpg",
            title:"Dear Megha",
            subtitle:"Romance / Drama"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICAxNmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311840-ylqzleblfl-portrait.jpg",
            title:"Raja Raja Chora",
            subtitle:"Comedy / Drama"
        },
    ]

    const premiersMovies = [
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title:"The Balkan Line",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137316-unmwlqfqvd-portrait.jpg",
            title:"The Nest",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title:"The Resistance",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title:"The Secrets We Keep",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-pxtjxgdyua-portrait.jpg",
            title:"The Capone",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
            title:"Proximity",
            subtitle:"English"
        },
    ]
    const onlineStream = [
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304004-cpfnbdagcz-portrait.jpg",
            title:"Data Science",
            subtitle:"Online Streaming"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-cvhsuzcndb-portrait.jpg",
            title:"Front Row Open Mic",
            subtitle:"Watch On Zoom"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304009-nsnwqmxhqm-portrait.jpg",
            title:"Digital Marketting",
            subtitle:"Online steaming"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304005-lnegmxafyd-portrait.jpg",
            title:"MBA",
            subtitle:"Online Streaming"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304004-cpfnbdagcz-portrait.jpg",
            title:"Data Science",
            subtitle:"Online Streaming"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-cvhsuzcndb-portrait.jpg",
            title:"Front Row Open Mic",
            subtitle:"Watch On Zoom"
        },
    ]
        
        

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
                        posters={posters}
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
                        posters={premiersMovies}
                        isDark={true} />

                </div>

            </div>

            <div className="container mx-auto px-12 my-8">
                <PosterSlider  
                        title="Recommended MOvies" 
                        subtitle="List of recommended Movies"
                        posters={onlineStream}
                        isDark={false} />

            </div>
        
        </>
            

    );
};

export default HomePage;

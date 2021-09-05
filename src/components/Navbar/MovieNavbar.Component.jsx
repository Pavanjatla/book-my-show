import React from 'react';
import {BiSearch,BiChevronDown,BiMenu,BiShareAlt } from 'react-icons/bi';

function NavSm(){
    return(
    <>
    <div className="text-dark-800 flex items-center justify-between">
        <div>
            <h3 className= "text-xl font-bold"> Fast and Furious 9 </h3>
        </div>
        <div className="w-8 h-8">
            <BiShareAlt className="w-full h-full" />

        </div>
        
    </div>    
    </>)

}
function NavLg(){

    return(
        <>
        <div className="container flex mx-auto px-4 items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-50 h-12">
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />

                </div>
                <div className= "w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                    <BiSearch/>
                    <input type="search" className="w-full bg-transparent border-none focus:outline-none " placeholder="Search for Movies and Shows,events,sports"/>

                </div>

            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                    Yeleswaram NCR <BiChevronDown/>

                </span>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded"> 
                        Sign In
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>

                </div>

            </div>

        </div>
        
        
        </>)
    
    
}

const MovieNavbar = () =>{
    return (
        <>  
            <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-dark-700 p-4">
                <div className="md:hidden">
                    {/* mobile screen */}
                    <NavSm />

                </div>
                <div className="hidden md:flex lg:hidden ">
                    {/* Medium/Tablet */}
                    <NavSm />

                </div>
                <div className="hidden w-full lg:flex">

                    {/* Large screen */}
                    <NavLg />

                </div>
            </nav>
        
        
        </>
    )

};

export default MovieNavbar;
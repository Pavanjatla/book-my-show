import React from "react";

const MovieInfo =({movie})=>{
    return (<>
            <div className="flex flex-col gap-8">
                <h1 className="text-white text-5xl font-bold">{movie.original_title}

                </h1>
                <div className="flex flex-col gap-5 text-white">
                        <h4>4K ratings</h4>
                        <h4>English, Hindi, Telugu, Tamil</h4>
                        <h4>{movie.overview}</h4>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹150
                    </button>
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Buy ₹550
                    </button>

                </div>
            </div>
        
        </>)
}
export default MovieInfo;
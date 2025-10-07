import React, {useState} from "react";

const Wishlist = ({movies}) => {

    return(
        <div className="mx-40">
            <h1 className="font-bold text-3xl text-red-300">Wishlist page</h1>
            {movies ? 
            <div className="mt-20 grid grid-cols-3 gap-4">
                {movies.results.map((item, index)=>{
                    return(
                        <div key={index} className="flex flex-col justify-center items-center w-full h-full p-3 border border-slate-300 rounded-sm">
                            {item.title}
                            <div className="relative">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                                <button className="absolute top-4 right-4 hover:translate-y-1 hover:scale-125" onClick={()=>handleAddWishlist(item)}>💗</button>
                            </div>
                        </div>
                    )
                })}
            </div> : 
            <div>No data</div>}
        </div>
    )
}

export default Wishlist;
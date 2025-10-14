import React, {useState, useEffect} from "react";
import Wishlist from "./WishlistPage";

const MoviesPage = () => {

    const apiKey = "e2021e8acf0d9f2bd4b0e67ab459fe5f" 
    const baseURL = "https://api.themoviedb.org/3";
    const onLoadURL = `${baseURL}/movie/popular?api_key=${apiKey}`
    console.log("on load api :", onLoadURL);

    //states
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [viewWishlist, setViewWishlist] = useState(false);

    //handler functions
    const handleOnChange = (e) => {
        console.log("Inside handleOnChange function");
        const {value, name} =  e.target;
        console.log("value 17", value);
        console.log("name 18 ", name);
        setSearch(value);
    }
    console.log("what user wants to search for ", search);

    const searchURL = `${baseURL}/search/movie?api_key=${apiKey}&query=${search}`
    console.log("serch url", searchURL);

    const handleAddWishlist = (item) => {
        console.log("inside wishlist handler");
        if(!wishlist.find(curr => curr.id === item.id)){
            setWishlist(prev =>[
                ...prev,
                item
            ])
        }
    }

    //need to send this "wishlist"array to Wishlist component
    console.log("wishlisted movies : ", wishlist)

    const handleViewWishlist = () => {
        console.log("wiewing wishlist");
        if(viewWishlist){
            setViewWishlist(false);
        }else{
            setViewWishlist(true);
        }
        console.log("view wishlist ", viewWishlist);
    }


    //renders whenever search changes
    //implemented debouncing -> delay of 3ms is added
    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log("timer fired ", timer)
            const getData = async() => {
                try{
                    const response = await fetch(search ? searchURL : onLoadURL);
                    const data = await response.json();
                    console.log("search movie data ", data);
                    setMovies(data);
                }
                catch{
                    console.log("An error occured")
                }
            }
            getData();
        }, 500);

        return () => {
            console.log("cleanup happening ", timer);
            clearTimeout(timer);
        }

    }, [search,setSearch])

    console.log("List of movies 61", movies);

    return(
        <div className="flex flex-col justify-center items-center mx-40">
            <h1 className="mt-10 p-3 flex justify-center items-center font-bold text-3xl text-red-700">Movies Page</h1>
            <div className="flex justify-between w-full items-center">
                <input 
                    placeholder="Search for a movie..."
                    className="w-3/4 border border-red-300 rounded p-3"
                    name="SearchField"
                    value={search}
                    onChange={handleOnChange}
                />
                <button 
                    className="bg-red-300 text-white font-bold rounded p-3"
                    onClick={handleViewWishlist}
                >
                        {viewWishlist ? "Back" : "My Wishlist" }
                </button>
            </div>
            {viewWishlist ? 
                <div>
                    <h2 className="mt-20 font-bold text-red-300 text-3xl">My Wishlist</h2>
                    <div className="mt-20 grid grid-cols-3 gap-4">
                        {wishlist.map((item, index)=>{
                            return(
                                <div className="flex flex-col justify-center items-center w-full h-full p-3 border border-slate-300 rounded-sm" key={index}>
                                    {item.title}
                                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                                </div>
                            )
                        })}
                    </div>
                </div> 
                : 
                <div>
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
                        <div>No data</div>
                    }
                </div>
            }
        </div>        
    )
}

export default MoviesPage
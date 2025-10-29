import React, {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar"

function App() {

  const BASE_URL = "https://dummyjson.com/recipes/search?q=";

  //local states 
  const [query, setQuery] = useState("")
  const [recipies, setRecipies] = useState([]);
  const [showResults, setShowResults] = useState(false);

  //cahcing -> cache is an object with query as key and results as value
  const [cache, setCache] = useState({});

  const SEARCH_URL = `${BASE_URL}${query}`

  //useEffect to load data on render
  useEffect(()=>{
    //debouncing ---> between 2 keystrokes if their is a delay of 300ms then only api will be called, else timer will be restarted (cleared)
    // so, fetchData is called only when 300ms(delay) are completed
    const timer = setTimeout(fetchData, 300);
    return () => (
      clearTimeout(timer)
    );
    
    
  }, [query]);

  const fetchData = async() => {
    //if data is already present in cache
    if(cache[query]){
      setRecipies(cache[query]);
      return;
    }

    //if data is not present
    console.log("API CALL", query);
    const res = await fetch(SEARCH_URL);
    const data = await res.json();

    setRecipies(data.recipes || []);

    //caching -> appending not replacing 
    setCache(prev => ({...prev, [query]:data?.recipes}));
  }
  
  //handler functions

  const handleSearch = (input) => {
    setQuery(input);
  }

  const handleShow = (isShow) => {
    setShowResults(isShow)
  }
  

  return (
    <div className="mt-10 p-7 flex flex-col justify-center items-center">
      <SearchBar handler={handleSearch} showHandler={handleShow}/>
      {showResults && (<div className="border border-slate-300 p-4 flex flex-col justif-center items-start max-h-44 w-2/5 cursor-pointer overflow-y-scroll">
        {query === "" ? (
          <p>Nothing to show</p>
        ) : (
           recipies?.map((d)=>{
          return(
            <li 
              key={d.id}
              className="list-none"
            >
              {d.name}
            </li>
          )
        })
        )}
      </div>)}
    </div>
  )
}

export default App


/**
 * Thought process : 
 * - write bare min. ui -> Search Input + Button
 * - call api -> fetch data
 * - show data that is typed
 * - 
 * 
 * ux enhancements : 
 * - when clicking outside -> hide result list 
 * 
 * performance enhanements : (because api call is happening on every key stroke)
 * - apply debouncing (when continusoly typing -> dont make api call , when a pause is taken -> make api call )
 * - cache ---> results should be cached i.e, dont make api calls when we see same result 
 */
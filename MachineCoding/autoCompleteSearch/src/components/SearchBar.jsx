import React, {useState, useEffect} from "react";

const SearchBar = (props) => {

    const {handler, showHandler} = props;

    //local states
    const [searchText, setSearchText] = useState("");
    
    //handler function
    const handleInputChange = (e) => {
        const val = e.target.value;
        setSearchText(val);
        handler(searchText);
    }

    const handleOnFocus = () => {
        showHandler(true);
    }
    const handleOnBlur = () => {
        showHandler(false);
    }
    

    return(
        <div className="w-full flex justify-center gap-3 items-center mb-9">
            <input
                type="text"
                className="w-2/5 border border-slate-300 rounded-md p-3 m-1"
                placeholder="What do you wanna eat ?"
                value={searchText}
                onChange={(e)=>handleInputChange(e)}
                onFocus={()=>handleOnFocus()}
                onBlur={()=>handleOnBlur()}
            />
        </div>
    )
}

export default SearchBar;
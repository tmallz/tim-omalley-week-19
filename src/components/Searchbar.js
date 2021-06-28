import React from "react";

function Searchbar(props){
    return(
        <div className = "container mx-auto bg-gray-200 w-1/2 border border-black">
            <p className = "text-center py-2">Search for employee by name, email, or number</p>
            <div className="p-8">
                <div className="bg-white flex items-center rounded-full shadow-xl">
                    <input 
                        className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                        id="search" 
                        type="text" 
                        placeholder="Search"
                        onChange = {props.handleInputChange}
                    />
                    <div className="p-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
import React from 'react';
import 'reactjs-popup/dist/index.css';


export interface Props {
    changeHandler(e: any): void;
}

const SearchBar: React.FC<Props> = ({ changeHandler }) => {
   

    return (

        <div className="search-bar">
           <label>Search
                <input id="searchbartext" onChange={changeHandler} />
            </label>
        </div>
    );
};

export default SearchBar;

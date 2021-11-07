import React from 'react';
import 'reactjs-popup/dist/index.css';


export interface Props {
    changeHandler(e: any): void;
}

const SearchBar: React.FC<Props> = ({ changeHandler }) => {
   

    return (

        <div className="search-bar">
            <form >
                <input id="searchbartext" onChange={changeHandler} />
            </form>
        </div>
    );
};

export default SearchBar;

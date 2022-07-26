import '../../index.css';
import './Search.css';
import {FaSearch} from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

function SearchBar () {
    return(
        <form className='search-bar'>
            <input
                className='header-search'
                placeholder="&#61442; search by using name or id"
                name="s" 
            />
            {/* <button type="submit">Search</button> */}
        </form>
    );
    
}


export default SearchBar;
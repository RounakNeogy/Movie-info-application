import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import user from '../../Images/user.png';
import './Header.scss';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/movies/movieSlice';

function Header(){
    const [term,setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(term=="") return alert("Please Enter search term");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");

    }

    return (
        <div className='header'>
                
            <div className='logo'>
                <Link to="/">Movie app</Link>
            </div>

            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input 
                        type="text" 
                        value={term}
                        placeholder="Search.."
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type="submit"><i className='fa fa-search'></i></button>
                </form>    
            </div>
            
            <div className='user-image'>
                <img
                    src={user}
                    alt="User Image"
                />
            </div>
        </div>
    );
};

export default Header;
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { findAnime } from '../actions/index';
import '../App.css';

function SearchBar(props) {

    const [formValue, setFormValue] = useState('');

    const clearState = () => {
        setFormValue('')
    }
    const handleChange = (searchValue) => {
        const value = searchValue.target.value;
        setFormValue(value);
    }

    const handleClick = (clickValue) => {
        clickValue.preventDefault();
        props.findAnime(formValue)
    }

    return (
        <div>
            <form className='form'>
                <input 
                type='text'
                name='search'
                value={formValue}
                className='search-box search-form'
                placeholder='Search for an Anime'
                onChange={handleChange}
                />
                <button className='search-btn search-form' onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        animes: state.animes,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, { findAnime })(SearchBar);

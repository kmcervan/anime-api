import React, {useState} from 'react';

function SearchBar() {

    const [formValue, setFormValue] = useState('');

    const handleChange = (searchValue) => {
        const value = searchValue.target.value;
        setFormValue(value);
    }
    const handleClick = (clickValue) => {
        clickValue.preventDefault();
        // props.findAnime(formValue)
    }

    return (
        <div>
            <form className='form'>
                <input 
                type='text'
                name='search'
                value={formValue}
                className='searchBar'
                placeholder='Search for an Anime'
                onChange={handleChange}
                />
                <button className='btn' onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

// const mapStateToProps = state => {
//     console.log(state);
//     return {
//         animes: state.animes,
//         isFetching: state.isFetching,
//         error: state.error,
//     }
// }

// export default connect(mapStateToProps, { findAnime })(SearchBar);
export default SearchBar;
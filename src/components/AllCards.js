import React, { useEffect } from 'react';
import SearchBar from './SearchBar';

function AllCards() {

    useEffect(() => {
        // props.getAnimeList();
    }, []);

    if(props.error) {
        return <h2>We got an error: {props.error}</h2>
    }

    if(props.isFetching) {
        return <h2 className='cards-fetching'>Fetching anime details, believe it!</h2>
    }

    return (
        <div className='all-cards-container'>
            <SearchBar props={props} />
            <h2 className='h2-animeList'>Top Trending Recommendations</h2>
            <div className='all-cards'>
                {props.animes.map((animeInfo) => {
                    // return *** add info here ***
                })}
            </div>
        </div>
    )
};

// const mapStateToProps = state => {
//     console.log(state);
//     return {
//         animes: state.animes,
//         isFetching: state.isFetching,
//         error: state.error
//     };
// };

// export default connect(mapStateToProps, { getAnimeList }) (AllCards);
export default AllCards;
import React from 'react';
import '../App.css';

function AnimeCard({animeInfo}) {
    return (
        <div className='card-container'>
            <div>
                <img className='anime-img' src={animeInfo.attributes.coverImage.original} />
                <div className='anime-info'>
                    <div className='text'>
                        <p>Average Rating: <span>{info.attributes.averageRating}</span></p>
                        <p>Popularity Rank: <span>{info.attributes.popularityRank}</span></p>
                        <p>Total Episodes: <span>{info.attributes.totalLength}</span></p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AnimeCard;

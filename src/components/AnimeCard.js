import React from 'react';
import '../App.css';

function AnimeCard({ animeInfo }) {
    console.log(animeInfo.attributes.coverImage.original)
    return (
        <div className='card-container'>
            <div className='anime-container'>
                <img className='anime-img' src={animeInfo.attributes.posterImage.large} />
                <div className='anime-info'>
                    <div className='anime-text'>
                        <h2 className='anime-card-h2'>
                            <a className='anime-card-h2' target='_blank' href={`https://www.youtube.com/watch?v=${animeInfo.attributes.youtubeVideoId}`}>{animeInfo.attributes.canonicalTitle}</a>
                        </h2>
                        <p>Average Rating: <span>{animeInfo.attributes.averageRating}</span></p>
                        <p>Popularity Rank: <span>{animeInfo.attributes.popularityRank}</span></p>
                        <p>Total Episodes: <span>{animeInfo.attributes.totalLength}</span></p>
                        <p className='synopsis'>About: <span>{animeInfo.attributes.synopsis}</span></p>
                        {/* <button> + </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;
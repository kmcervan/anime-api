import React from 'react';
import '../App.css';

function AnimeCard({ animeInfo }) {
    console.log(animeInfo.attributes.coverImage.original)
    return (
        <div className='card-container'>
            <div>
                <img className='anime-img' src={animeInfo.attributes.coverImage.original} />
                <div className='anime-info'>
                    <div className='text'>
                        <p>Average Rating: <span>{animeInfo.attributes.averageRating}</span></p>
                        <p>Popularity Rank: <span>{animeInfo.attributes.popularityRank}</span></p>
                        <p>Total Episodes: <span>{animeInfo.attributes.totalLength}</span></p>
                    </div>
                </div>
            </div>
            <div className='h2-container'>
                <h2 className='anime-h2'>
                    <a className='youtube-A-Tag' target='_blank' href={`https://www.youtube.com/watch?v=${animeInfo.attributes.youtubeVideoId}`}>{animeInfo.attributes.canonicalTitle}</a>
                </h2>
            </div>
        </div>
    )
}

export default AnimeCard;
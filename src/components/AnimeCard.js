import React from 'react';
import '../App.css';

function AnimeCard({ animeInfo }) {
    const OnClick = () => {
        
    }
    return (
        <div className='card-container'>
            <div className='anime-container'>
                <img className='anime-img' src={animeInfo.attributes.posterImage.large} />
                <div className='anime-info'>
                    <div className='anime-text'>
                        <h2 className='anime-card-h2'>
                            <a className='anime-card-h2' target='_blank' href={`https://www.youtube.com/watch?v=${animeInfo.attributes.youtubeVideoId}`}>{animeInfo.attributes.canonicalTitle}</a>
                        </h2>
                        <p className='card-text'>Rating: <span>{animeInfo.attributes.averageRating}</span></p>
                        <p className='card-text'>Rank: <span>{animeInfo.attributes.popularityRank}</span></p>
                        <p className='card-text'>Total Episodes: <span>{animeInfo.attributes.totalLength}</span></p>
                        
                        <p className='synopsis-p'><span className='synopsis'>{animeInfo.attributes.synopsis}</span></p>
                        <div className='synopsis-div'>     
                        <a className='anime-card-h2' target='_blank' href={`https://www.youtube.com/watch?v=${animeInfo.attributes.youtubeVideoId}`}><button target='_blank' className='card-btn'> ... </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;
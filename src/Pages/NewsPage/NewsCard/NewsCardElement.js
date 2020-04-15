import React from 'react';
import './NewsCardElement.css';

export default function NewsCardElement(props) {

    return (
        <>
            <div className='news-card-wrapper'>   
                <img className='news-card-image' src={props.element.image}/>
                <div className='news-card-text-section'>
                    <div className='news-card-title'>
                        <span className='news-card-title-text'>
                            {props.element.title}
                        </span>
                    </div>

                    <div className='news-card-description'>
                        <p>
                            {props.element.description}
                        </p>
                    </div>

                    <a className='news-card-read-more'>Read More...</a>
                </div>
            </div>
        </>
    )
}
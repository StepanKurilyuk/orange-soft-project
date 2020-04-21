import React from 'react';
import './NewsCardElement.css';

export default function NewsCardElement(props) {
    return (
        <>
            <div className='news-card-element-container' style={{'backgroundImage': `url(${props.post.image})`}}>
                <div className='news-card-text-container'>
                    <div className='news-card-text-title '>
                        {props.post.title}
                    </div>
                    <div className='news-card-text-description'>
                        {props.post.description}
                    </div>
                </div>
            </div>
        </>
    )
}
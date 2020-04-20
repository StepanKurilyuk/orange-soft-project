import React from 'react';
import './HotNewsElement.css';

export default function HotNewsElement(props) {
    const { post } = props;

    return (
        <div className="post-wrapper">
            <div className='post-container'>
                <div className="post-img">
                    <a href="#"><img src={post.image} alt=""/></a>
                </div>

                <div className="post-content">
                    <h3 className="post-title"><a href="#">{post.title}</a></h3>
                    <p className="post-description">
                        {post.description}
                    </p>
                    <ul className="post-bar">
                        <li>
                            <i className="fa fa-calendar"/>{post.date}
                        </li>
                    </ul>
                    <a href="#" className="read-more">read more</a>
                </div>
            </div>
        </div>
    )
}
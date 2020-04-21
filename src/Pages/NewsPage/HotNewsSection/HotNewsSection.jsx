import React from 'react';
import './HotNewsSection.css';
import HotNewsElement from './HotNewsElement/HotNewsElement';

class HotNewsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.news,
            post: this.props.news[0]
        }

        setInterval(() => this.nextPost(), 10000)
    }

    nextPost = () => {
        let newIndex = this.state.post.index + 1;
        
        if (newIndex === this.props.news.length - 1) {
            newIndex = 0;
        }

        this.setState({
            post: this.props.news[newIndex]
        })
    }

    render() {
        const { posts, post } = this.state;

        return (
            <div className='hot-news-section'>
                <div className='posts-slider'>
                    <div className='posts-slider-wrapper' style={{
                        'transform': `translateX(-${post.index * (100 / posts.length)}%)`
                    }}>
                        {posts.map(post => 
                            <HotNewsElement key={post.index} post={post}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default HotNewsSection;
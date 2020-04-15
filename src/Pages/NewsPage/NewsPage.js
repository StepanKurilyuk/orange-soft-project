import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import * as data  from '../../testData/testData';
import NewsCardElement from './NewsCard/NewsCardElement';
import './NewsPage.css';

export default function NewsPage() {
    return (
        <>
            <NavigationBar selectedTabName='News'/>

            <div className='news-page-wrapper' id='news-form'>
                {data.newsData.map(element =>
                    <NewsCardElement element={element}/>        
                )}
            </div>  
        </>
    )
}
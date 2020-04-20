import React from 'react';
import { NavigationBar } from '../../Components/NavigationBar/NavigationBar';
import NewsCardElement from './NewsCard/NewsCardElement';
import styles from './NewsPage.css';
import { connect } from 'react-redux';
import { newsActions } from '../../actions/newsActions';
import HotNewsSection from './HotNewsSection/HotNewsSection';

class NewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalNewsCount: 0,
            pageSize: 10,
            pages: 0,
            allNews: [],
            hotNews: [],
            currentPage: 1,
            isDataLoaded: false
        }

    }

    componentWillMount() {
        const { getAllNews } = this.props;
        getAllNews();
    }

    render() {
        const { allNews, hotNews, pages, totalNewsCount, pageSize, isDataLoaded } = this.props;
        const { currentPage } = this.state;

        return (
            <>
                <NavigationBar selectedTabName='News'/>
                {isDataLoaded && <HotNewsSection news={hotNews}/>}   

                <div className={styles['news-page-wrapper']} id='news-form'>
                    {(isDataLoaded && allNews && allNews.map(element =>
                        <NewsCardElement element={element}/>
                    ))}
                </div>

                <div>
                    {pages && pages.map(pageNumber => {
                        return (
                            <span className={currentPage === pageNumber && ''}>
                                {pageNumber}
                            </span>
                        )
                    })}
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    const { news, pageSize, totalNewsCount, currentPage, hotNews, isDataLoaded } = state.newsActions;
    return { news, pageSize, totalNewsCount, currentPage, hotNews, isDataLoaded };
}

const actionCreators = {
    getAllNews: newsActions.getAllNews,
};

const connectedNewsPage = connect(mapStateToProps, actionCreators)(NewsPage);
export { connectedNewsPage as NewsPage };
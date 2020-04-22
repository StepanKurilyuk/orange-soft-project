import React from 'react';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import NewsCardElement from './NewsCard/NewsCardElement';
import './NewsPage.css';
import { connect } from 'react-redux';
import { newsActions } from '../../actions/newsActions';
import HotNewsSection from './HotNewsSection/HotNewsSection';
import NewsPagePagination from './NewsPagePagination/NewsPagePagination';

class NewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalNewsCount: 0,
            pageSize: 10,
            pages: [1],
            allNews: [],
            currentPage: 1,
            newsToDisplay: [],
            isDataLoaded: false,
            paginationSetup: {
                pages: [],
                newsToDisplay: [],
                currentPage: 1
            }
        }

        this.ref = React.createRef()  
        this.handlePaginationPageClick = this.handlePaginationPageClick.bind(this);
    }

    async componentDidMount() {
        const { getAllNews } = this.props;
        getAllNews();
    }

    handlePaginationPageClick(pageNumber) {
        const { setCurrentPage, pageSize, news } = this.props;
        setCurrentPage(pageNumber, news.news, pageSize);
        this.ref.current.scrollTo(0, 0);
    }

    render() {
        const { news, isDataLoaded, paginationSetup } = this.props
        const hotNews = isDataLoaded && news.hotNews; 

        const { pages, newsToDisplay, currentPage } = paginationSetup

        return (
            <>
                <NavigationBar selectedTabName='News'/>

                <div ref={this.ref} className='news-page-wrapper '>
                    {isDataLoaded && <HotNewsSection news={hotNews}/>}   
                    {(isDataLoaded && newsToDisplay && newsToDisplay.map(element =>
                        <NewsCardElement key={element.index} post={element}/>
                    ))}
                                    
                    {isDataLoaded &&
                        <div className='news-page-pagination'>
                            <NewsPagePagination paginationClick={this.handlePaginationPageClick} pages={pages} currentPage={currentPage}/>
                        </div>
                    }
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    const { news, isDataLoaded, paginationSetup, pageSize } = state.newsActions;
    return { news, isDataLoaded, paginationSetup, pageSize };
}

const actionCreators = {
    getAllNews: newsActions.getAllNews,
    setCurrentPage: newsActions.setCurrentPage
};

const connectedNewsPage = connect(mapStateToProps, actionCreators)(NewsPage);
export { connectedNewsPage as NewsPage };
import React from 'react';
import { NavigationBar } from '../../Components/NavigationBar/NavigationBar';
import NewsCardElement from './NewsCard/NewsCardElement';
import styles from './NewsPage.css';
import { connect } from 'react-redux';
import { newsActions } from '../../Actions/newsActions';
import HotNewsSection from './HotNewsSection/HotNewsSection';

class NewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            news: [],
            pageSize: 1,
            totalNewsCount: 1,
            currentPage: 1,
        }
    }

    componentWillMount() {
        const { getAllNews } = this.props;
        getAllNews();
    }

    render() {
        console.log(this.state.allNews)
        let pagesCount = this.props.totalNewsCount / this.props.pageSize;

        console.log(this.props)
        let pages = [];

        for (let i = 1; i < pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>
                {console.log(this.props)}
                <NavigationBar selectedTabName='News'/>
                <HotNewsSection/>

                <div className={styles['news-page-wrapper']} id='news-form'>
                    <button onClick={this.handleClick}>TEST</button>
                    {/* {data.newsData.map(element =>
                        <NewsCardElement element={element}/>        
                    )} */}
                </div>

                <div>
                    {pages.map(pageNumber => {
                        return (
                            <span className={this.props.currentPage && ''}>
                                {pageNumber}
                            </span>
                        )
                    })}
                </div>
            </>
        )
    }
}

function mapStateToProps (state) {
    const { news, pageSize, totalNewsCount, currentPage } = state.newsActions;
    return { news, pageSize, totalNewsCount, currentPage };
}

const actionCreators = {
    getAllNews: newsActions.getAllNews,
};

const connectedNewsPage = connect(mapStateToProps , actionCreators)(NewsPage);
export { connectedNewsPage as NewsPage };
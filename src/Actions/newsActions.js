import { newsConstants } from '../constants/newsConstants';
import { newsService } from '../Services/newsService/newsService';

export const newsActions = {
    getAllNews,
    setCurrentPage
    // addNew,
};

function getAllNews() {
    return dispatch => {
        dispatch(request());

        newsService.getAllNews()
            .then(
                news => {
                    const paginationSetup = newsService.calculateVisibleNews(1, news.news, 10);
                    dispatch(success(news, paginationSetup))
                },
            )
    };

    function request() { return { type: newsConstants.GET_ALL_NEWS } }
    function success(news, paginationSetup) { return { type: newsConstants.GET_ALL_REQUEST_SUCCESS, news, paginationSetup} }
}

function setCurrentPage(pageNumber, allNews, pageSize) {
    const paginationSetup = newsService.calculateVisibleNews(pageNumber, allNews, pageSize);

    return dispatch => {
        dispatch(setPage(paginationSetup));
    }

    function setPage(paginationSetup) { return { type: newsConstants.SET_CURRENT_PAGE, paginationSetup } };
}
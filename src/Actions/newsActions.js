import { newsConstants } from '../constants/newsConstants';
import { newsService } from '../Services/newsService/newsService';

export const newsActions = {
    getAllNews,
    // addNew,
};

function getAllNews() {
    return dispatch => {
        dispatch(request());

        newsService.getAllNews()
            .then(
                news => { 
                    dispatch(success(news));
                },
            );
    };

    function request() { return { type: newsConstants.GET_ALL_NEWS } }
    function success(news) { return { type: newsConstants.GET_ALL_REQUEST_SUCCESS, news } }
}
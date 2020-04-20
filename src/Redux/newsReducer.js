import { newsConstants } from '../constants/newsConstants'

let initalState = {
    news: [],
    pageSize: 10,
    totalNewsCount: 0,
    currentPage: 1,
    hotNews: [],
}

export function newsActions(state = initalState, action) {
    switch (action.type) {
        case newsConstants.GET_ALL_NEWS:
            return {};
        case newsConstants.GET_ALL_REQUEST_SUCCESS:
            return {
                ...state,
                news: action.news,
                hotNews: action.news.hotNews,
                totalNewsCount: action.news.news.length,
                pageSize: 10,
                currentPage: 1,
                isDataLoaded: true
            };
        default:
            return state;
    }
}
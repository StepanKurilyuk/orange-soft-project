import { newsConstants } from '../constants/newsConstants'

let initalState = {
    news: [],
    pageSize: 10,
    totalNewsCount: 20,
    currentPage: 1,
}

export function newsActions(state = initalState, action) {
    switch (action.type) {
        case newsConstants.GET_ALL_NEWS:
            return {
                allNews: action.news
            };
        case newsConstants.GET_ALL_REQUEST_SUCCESS:
            return {
                allNews: action.news,
            };
        default:
            return state;
    }
}
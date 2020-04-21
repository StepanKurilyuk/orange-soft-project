import { newsConstants } from '../constants/newsConstants'

let initalState = {
    news: [],
    pageSize : 10,
    paginationSetup: {
        pages: [],
        newsToDisplay: [],
        currentPage: {}
    }
}

export function newsActions(state = initalState, action) {
    switch (action.type) {
        case newsConstants.GET_ALL_NEWS:
            return {
                ...state
            };
        case newsConstants.GET_ALL_REQUEST_SUCCESS:
            return {
                ...state,
                news: action.news,
                isDataLoaded: true,
                paginationSetup: action.paginationSetup
            };
        case newsConstants.SET_CURRENT_PAGE:
            return {
                ...state,
                paginationSetup: action.paginationSetup
            }
        default:
            return state;
    }
}
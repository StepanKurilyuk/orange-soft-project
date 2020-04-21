export const newsService = {
    getAllNews,
    calculateVisibleNews
    // addNew
}

function getAllNews() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch('http://localhost:3000/news', requestOptions)
        .then(handleResponse)
        .then(news => {
            return news;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;

            return Promise.reject(error);
        }

        return data;
    });
}

function calculateVisibleNews(pageNumber, allNews, pageSize) {
    const newsToDisplay = allNews.slice(((pageNumber - 1) * pageSize), ((pageNumber - 1) * pageSize) + pageSize);
    const pages = [];

    for (let i = 0; i < allNews.length / pageSize; i++) {
        pages.push(i + 1);
    }
    
    return {
        allNews: allNews,
        pages: pages,
        newsToDisplay: newsToDisplay,
        currentPage: pageNumber
    }
};
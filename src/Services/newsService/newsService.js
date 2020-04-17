export const newsService = {
    getAllNews,
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
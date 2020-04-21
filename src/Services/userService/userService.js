export const userService = {
    login,
    logout,
    getUserData
};

function login(userEmail, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail, password })
    };

    return fetch('http://localhost:3000/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');

    let result = localStorage.getItem('user') ? false : true;

    return result;
}

function getUserData() {
    const userId = JSON.parse(localStorage.getItem('user')).id;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userId})
    };

    return fetch('http://localhost:3000/profile', requestOptions)
        .then(handleResponse)
        .then(userData => {
            return userData;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;

            return Promise.reject(error);
        }

        return data;
    });
}
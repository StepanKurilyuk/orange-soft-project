let users = [{userEmail : 'test@orangesoft.com', username: 'orangesoft  ', id: 1, password : '123456'}, {userEmail: '1', password: '1'}];

export function configureFakeBackend() {
    let realFetch = window.fetch;

    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call

                // authenticate
                if (url.endsWith('/login') && opts.method === 'POST') {
                    //email validation
                    let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    let isEmailValid = emailRegExp.test(params.userEmail);

                    if (isEmailValid) {
                        // find if any user matches login credentials
                        let filteredUsers = users.filter(user => {
                            return user.userEmail === params.userEmail && user.password === params.password;
                        });

                        if (filteredUsers.length) {
                            // if login details are valid return user details and fake jwt token
                            let user = filteredUsers[0];
                            let responseJson = {
                                id: user.id,
                                userEmail: user.userEmail,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                token: 'fake-jwt-token'
                            };

                            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                        } else {
                            reject('Email or password is incorrect');
                        }
                    } else {
                        reject('Please enter a valid email address');
                    }
                    
                    return;
                }

                // getting all news from fake back-end
                if (url.endsWith('/news') && opts.method === 'GET') {
                    const newsItem = {
                        title: 'News Title',
                        image: 'img',
                        description: 'News Description'
                    }

                    const newsData = Array.from({ length: 1000 }, () => newsItem);

                    let responseJson = {
                        newsData: newsData
                    };

                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 2000);
    }
}
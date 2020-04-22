// necessary data for login form
let usersLoginData = [{
    userEmail : 'test@orangesoft.com',
    id: 1,
    password : '123456'
}];

// necessary data for user profile, ( id : {data} )
let usersFullData = {
    1 : {
        id : 1,
        firstName : 'Stepan',
        lastName : 'Kurilyuk',
        jobTitle : 'Developer',
        followers : '213',
        following : '133',
        activity : '1338',
        birthday : '17 July 1999',
        location : 'Zhabinka, Brest Region, Belarus',
        socialNetworks: [
            {
                name : 'vk',
                link : 'https://vk.com/rumml',
            },
            {
                name : 'linkedIn',
                link : 'https://www.linkedin.com/in/stepan-kurilyuk-235b97181/',
            },
            {
                name : 'facebook',
                link : 'https://facebook.com',
            },
        ],
        contact : {
            email : 'test@orangesoft.com',
            mobilePhone : '+375299999999'
        }
    
    },
}

export function configureFakeBackend() {
    let realFetch = window.fetch;

    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call

                if (url.endsWith('/login') && opts.method === 'POST') {
                    //email validation
                    let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    let isEmailValid = emailRegExp.test(params.userEmail);

                    if (isEmailValid) {
                        // find if any user matches login credentials
                        let filteredUsers = usersLoginData.filter(user => {
                            return user.userEmail === params.userEmail.toLowerCase() && user.password === params.password;
                        });

                        if (filteredUsers.length) {
                            // if login details are valid return user details and fake jwt token
                            let user = filteredUsers[0];
                            let responseJson = {
                                id: user.id,
                                userEmail: user.userEmail,
                                token: 'fake-jwt-token'
                            };

                            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                        } else if (isEmailValid && params.password.length === 0) {
                            reject('Password cannot be empty');
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
                    const newsData = Array.from({ length: 22 }, (element, index) => {
                        return {
                            title: 'News Title News TitleNews TitleNews TitleNews Title',
                            image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_15.png',
                            description: 'How do you auto-resize a large image so that it will fit into a smaller width div container whilst maintaining its width:height ratio?How do you auto-resize a large image so that it will fit into a smaller width div container whilst maintaining its width:height ratio?How do you auto-resize a large image so that it will fit into a smaller width div container whilst maintaining its width:height ratio?How do you auto-resize a large image so that it will fit into a smaller width div container whilst maintaining its width:height ratio?',
                            index: index
                        }
                    });

                    const hotNewsData = Array.from({ length: 8 }, (element, index) => {
                        return {
                            title: 'Hot News Title News TitleNews TitleNews TitleNews TitleNews TitleNews TitleNews TitleNews TitleNews TitleNewsTitleNewsTitleNewsTitleNewsTitleNews TitleNews Title',
                            image: 'https://dev.by/storage/images/76/24/65/32/derived/df2bcdf6fab4e517a2c6ba544d00a1ea.jpg',
                            description: 'How do you auto-resize a large image so that it will fit into a smaller width div container whilst maintaining its width:height ratio?How do you auto-resize a large image so that it will fit into a smaller width div container whilst maintaining its width:height ratio?How do you auto-resize a large image so that it will fit into a smaller width div container whilst maintaining its width:height ratio?',
                            index: index,
                        }
                    });

                    let responseJson = {
                        hotNews: hotNewsData,
                        news: newsData
                    };

                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                }

                if (url.endsWith('/profile') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);
                    let userData =  usersFullData[params.userId];

                    let responseJson = {
                        'userData': userData
                    };

                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 2000);
    }
}
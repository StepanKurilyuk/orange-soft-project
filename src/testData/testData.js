export const usersLoginData = {
    'test@orangesoft.co' : '123456'
}

export const usersData = {
    'test@orangesoft.co' : {
        'name' : 'UserName',
        'surName' : 'UserSurName',
        'email' : 'test@orangesoft.co',
        'avatar' : '',
        'topBackground' : '',
        'location' : 'Belarus'
    }
}

const newsItem = {
    'title' : '«Нам не хочется работать 24/7, не видеть семью и зарабатывать по $5—10 тысяч». Разбираем обещания сервиса CashUBack',
    'description' : 'Самый лучший сетевой маркетинг — тот, который «продают» вам прямо сейчас. Чуть больше года назад мы написали про ребят из проекта Act&Get, которые продавали то ли украшения, то ли участие в дележе так и не заработанных денег. Проект почти стерли из памяти интернета, но герои на месте. Пойдемте смотреть, что они придумали на этот раз.',
    'image' : 'https://content.onliner.by/news/main/dc3bb2c543e19f19c9f052beb60540f6.jpeg'
}

export const newsData = Array.from({ length: 1000 }, () => newsItem); ;

console.log(newsData)
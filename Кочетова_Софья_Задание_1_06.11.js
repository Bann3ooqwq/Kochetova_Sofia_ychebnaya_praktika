function checkWeather(temperature) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (temperature > 0) {
                resolve('Тепло!');
            } else {
                reject(new Error('Холодно!'));
            }
        }, 1000);
    });
}
checkWeather(5) 
    .then(message => {
        console.log('Успешно:', message);
    })
    .catch(error => {
        console.error('Ошибка:', error.message);
    })
    .finally(() => {
        console.log('Проверка завершена');
    });
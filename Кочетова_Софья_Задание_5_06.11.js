function fetchWithTimeout(url, ms) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Таймаут'))
        }, ms)
    })а
    const fetchPromise = fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP-ошибка: ${response.status}`)
        }
        return response.json()
    })
    return Promise.race([fetchPromise, timeoutPromise])
}
console.log('Запуск теста с таймаутом 100 мс...');
fetchWithTimeout('https://wttr.in/Moscow?format=j1', 100)
    .then(data => {
        console.log('Успех (100 мс):', data)
    })
    .catch(error => {
        console.error('Ошибка (100 мс):', error.message)
    })
setTimeout() => {
    console.log('Запуск теста с таймаутом 5000 мс...')
    fetchWithTimeout('https://wttr.in/Moscow?format=j1', 5000)
        .then(data => {
            console.log('(5000 мс): Температура в Москве', data.current_condition[0].temp_C + '°C')
        })
        .catch(error => {
            console.error('Ошибка (5000 мс):', error.message)
}, 150)
}
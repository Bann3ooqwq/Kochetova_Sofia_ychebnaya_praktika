const goroda = [
    { name: 'Москва', url: 'https://wttr.in/Moscow?format=j1' },
    { name: 'Лондон', url: 'https://wttr.in/London?format=j1' },
    { name: 'Париж', url: 'https://wttr.in/Paris?format=j1' }
    ]
const fetchPromises = goroda.map(gorod => 
    fetch(gorod.url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Не удалось получить данные для ${gorod.name}: ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            const temp = data.current_condition[0].temp_C
            return { name: gorod.name, temp: temp }
        })
)
Promise.all(fetchPromises)
    .then(results => {
        results.forEach(result => {
            console.log(`Температура в ${result.name}: ${result.temp}°C`)
        })
    })
    .catch(error => {
        console.error('ошибка:', error.message)
    })
    .finally(() => {
        console.log('запросы завершены')
    })
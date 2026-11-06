const urls = [
    { name: 'Москва', url: 'https://wttr.in/Moscow?format=j1' },
    { name: 'Лондон', url: 'https://wttr.in/London?format=j1' },
    { name: 'Ошибка', url: 'htpps://wtr.inn/Moscoow?format=j1' }
];
const fetchPromises = urls.map(item => 
    fetch(item.url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`)
            }
            return response.json()
        })
        .then(data => {
            const temp = data.current_condition[0].temp_C
            return { 
                city: item.name, 
                status: 'fulfilled', 
                value: `Температура: ${temp}°C` 
            }
        })
        .catch(error => {
            return { 
                city: item.name, 
                status: 'rejected', 
                reason: `Ошибка для ${item.name}: ${error.message}` 
            }
        })
)

Promise.allSettled(fetchPromises)
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log(result.value.value)
            } else {
                console.log(result.value.reason)
            }
        })
    })
    .catch(unexpectedError => {
        console.error('ошибка:', unexpectedError)
    })
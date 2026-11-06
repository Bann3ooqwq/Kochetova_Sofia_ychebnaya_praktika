async function getWeather() {
    const response = await fetch('https://wttr.in/Moscow?format=j1');
    const jsonData = await response.json();
    return jsonData.contents;
}
(async () => {
    try {
        const weather = await getWeather();
        console.log(weather);
    } catch (error) {
        console.error(error.message)
    }
})();
getWeather()
const apiUrl = "https://api.chucknorris.io/jokes/randon"

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json()

    console.log(data.value)
}

getJoke();
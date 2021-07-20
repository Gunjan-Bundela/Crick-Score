export const getmatches = () => {
    const url=`https://cricapi.com/api/matches?apikey=wj7ZjXJVRWd9EvM7NmFCumVYr6i2`
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log('ERROR: ',error))
}

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=wj7ZjXJVRWd9EvM7NmFCumVYr6i2&unique_id=${id}`
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log('Error:',error))
}



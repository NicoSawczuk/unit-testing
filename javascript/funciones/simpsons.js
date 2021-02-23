let episodes = [];
const season = 6;
const url = `https://www.simpsonsoptimizer.com/episodes/s/${season}/`

function addEpisode(episode) {
    if (episode.hasOwnProperty('id') && episode.hasOwnProperty('title') && episode.hasOwnProperty('season')) {
        episodes.push(episode)
    } else {
        throw 'Invalid format'
    }
}

function deleteEpisode(episodeId) {
    const index = episodes.map(({ id }) => id).findIndex(id => id === episodeId)

    if (index > -1) {
        episodes = [
            ...episodes.slice(0, index),
            ...episodes.slice(index + 1)
        ]
    }
}

function restore() {
    episodes = []
}

function episodesList() {
    return [...episodes]
}

async function getEpisodes(url) {
    await fetch(url)
        .then(res => res.json())
        .then((data) => {
            return data
        })
        .catch((error) => console.log(error))
}

module.exports = simpsons = {
    addEpisode,
    deleteEpisode,
    restore,
    episodesList,
    getEpisodes
}



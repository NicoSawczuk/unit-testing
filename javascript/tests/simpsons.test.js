const simpsons = require('../funciones/simpsons')

describe('Simpsons', () => {
    const simpsonsList = [{
        title: "Bart of Darkness",
        season: 6,
        id: 1,
    },
    {
        title: "Lisa's Rival",
        season: 6,
        id: 2,
    },
    {
        title: "Another Simpsons Clip Show",
        season: 6,
        id: 3,
    }]

    describe('Add episode', () => {
        test('Se agrega un episodio nuevo con las props {title, season, id}', () => {
            const episode = {
                title: "Bart of Darkness",
                season: 6,
                id: 1,
            }
            simpsons.addEpisode(episode)
            expect(simpsons.episodesList()).toStrictEqual([episode])
        })
        test('Se agrega un episodio nuevo con las props {title, season} y falla', () => {
            const episode = {
                title: "Bart of Darkness",
                season: 6,
            }

            expect(() => simpsons.addEpisode(episode)).toThrow('Invalid format')
        })
    })

})
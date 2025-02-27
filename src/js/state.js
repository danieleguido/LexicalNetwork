import * as d3 from 'd3'
import combinatorics from 'js-combinatorics'

// const s

export let s = {

    densityData: [],
    distance: 30,
    zoomIdentity: null,

    setCanvas: () => {
        s.canvas = d3.select('canvas')
        s.context = document.querySelector('canvas').getContext('2d')
    },

    setMatches: (matches) => {
        s.matches = matches;
    },

    // Rename shortened keys (ex. s => source)
    setGraph: graph => {
        graph.links.map(link => {
            link['source'] = link.s, link['target'] = link.t, link['value'] = link.v
            delete link.s, delete link.t, delete link.v
        })
        s.graph = graph
    },

    setPairs: nodes => {

        s.pairs = []
        const pairs = combinatorics.bigCombination(nodes, 2)

        pairs.forEach(pair => {

            // Get common terms
            const commonTerms = Object.keys(pair[0].tokens)
                .filter(n => Object.keys(pair[1].tokens).includes(n))

            // Create term array
            const terms = commonTerms.reduce((array, term) => {
                const value = (pair[0].tokens[term] + pair[1].tokens[term]) / 2
                array.push([term, value])
                return array
            }, []).sort((a, b) => b[1] - a[1])

            // Create the pair object
            s.pairs.push({
                pair: pair,
                terms: terms,
            })

        })

    },

    setScreen: () => {
        s.screen = {}
        // if ('devicePixelRatio' in window && window.devicePixelRatio > 1)
        //     s.screen.density = window.devicePixelRatio

        // desnsity set at 1 to simplifying coding

        s.screen.density = 1
        const div = document.getElementById('simulation')
        s.screen.width = div.clientWidth * s.screen.density
        s.screen.height = div.clientHeight * s.screen.density

        d3.select('canvas').style('width', `${div.clientWidth}px`)
            .style('height', `${div.clientHeight}px`)
            .attr('width', s.screen.width)
            .attr('height', s.screen.height)

    },

}
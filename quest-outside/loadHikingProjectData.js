const axios = require ('axios') 
const fs = require('fs')

const difficultyMap = {
    dblack:1.2,
    black:1,
    blueBlack:.9,
    blue:.75,
    greenBlue:.6,
    green:.5

}

const HikingDat = require('./response.json')
const trailArr = []
HikingDat.trails.map(trail => {
    trail = {
        ...trail,
        xpReward: Math.round(trail.length * trail.ascent / 100 * difficultyMap[trail.difficulty])
    }
    trailArr.push(JSON.stringify(trail))
})

const data = trailArr.join("\n")

// const data = JSON.stringify(trailArr, null)

fs.writeFileSync('test1.json', data)

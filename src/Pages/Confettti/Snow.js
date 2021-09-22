import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'



export default () => {
    const { width, height } = useWindowSize()
    function randomInt(min, max) {
        return Math.floor(min + (Math.random() * ((max - min) + 1)))
    }

    function drawSnowflake(ctx) {
        const numPoints = this.numPoints || (randomInt(2,3) * 2)
        this.numPoints = numPoints
        const innerRadius = this.radius * 0.2
        const outerRadius = this.radius * 0.8
        ctx.beginPath()
        ctx.moveTo(0, 0 - outerRadius)

        for(let n = 1; n < numPoints * 2; n++) {
            const radius = n % 2 === 0 ? outerRadius : innerRadius
            const x = radius * Math.sin((n * Math.PI) / numPoints)
            const y = -1 * radius * Math.cos((n * Math.PI) / numPoints)
            ctx.lineTo(x, y)
        }
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }
    return (
        <Confetti
            width={width}
            height={height}
            drawShape={drawSnowflake}
            colors={['#AEE1FF', '#CBDDF8']}
            gravity={0.02}
            wind={0.00}
        />
    )
}

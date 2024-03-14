import { assertExists } from "./assertions"
import { Color, ColorNumber, cubeColors } from "./cube-constants"
import { setupSequence } from "./sequence-executor"
import { TColorNumber } from "./types"

export function initCubeSolver() {
    assertExists(document.getElementById('solve')).addEventListener('click', _ => {
        const cubeColorNumbers: Array<Array<Array<TColorNumber>>> = []
        cubeColors.forEach(layer => {
            const layerColorNumbers: Array<Array<TColorNumber>> = []
            layer.forEach(cube => {
                const colorNumbers: Array<TColorNumber> = []
                cube.forEach(color => {
                    switch (color) {
                        case Color.BLACK:
                            colorNumbers.push(ColorNumber.BLACK)
                            break
                        case Color.WHITE:
                            colorNumbers.push(ColorNumber.WHITE)
                            break
                        case Color.RED:
                            colorNumbers.push(ColorNumber.RED)
                            break
                        case Color.BLUE:
                            colorNumbers.push(ColorNumber.BLUE)
                            break
                        case Color.GREEN:
                            colorNumbers.push(ColorNumber.GREEN)
                            break
                        case Color.YELLOW:
                            colorNumbers.push(ColorNumber.YELLOW)
                            break
                        case Color.ORANGE:
                            colorNumbers.push(ColorNumber.ORANGE)
                            break
                    }
                })
                layerColorNumbers.push(colorNumbers)
            })
            cubeColorNumbers.push(layerColorNumbers)
        })
    
        fetch("http://localhost:5208/Cube/Solve", {
            method: "POST",
            body: JSON.stringify(cubeColorNumbers),
            mode: "cors",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => {
            res.json().then((json) => {
                setupSequence(json)
            })
        })
    })
}
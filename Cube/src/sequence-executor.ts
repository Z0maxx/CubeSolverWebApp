import { assertExists } from "./assertions";
import { CubeLayer, Direction, Notation } from "./cube-constants";
import { turn, turnCube } from "./rotations";
import { TNotation, TranslatedNotation } from "./types";

function translateNotation(notation: TNotation): TranslatedNotation {
	switch (notation) {
		case Notation.L:
			return { layer: true, twice: false, direction: Direction.DOWN, cubeLayer: CubeLayer.LEFT };
		case Notation.Lp:
			return { layer: true, twice: false, direction: Direction.UP, cubeLayer: CubeLayer.LEFT };
		case Notation.L2:
			return { layer: true, twice: true, direction: Direction.UP, cubeLayer: CubeLayer.LEFT };

		case Notation.R:
			return { layer: true, twice: false, direction: Direction.UP, cubeLayer: CubeLayer.RIGHT };
		case Notation.Rp:
			return { layer: true, twice: false, direction: Direction.DOWN, cubeLayer: CubeLayer.RIGHT };
		case Notation.R2:
			return { layer: true, twice: true, direction: Direction.DOWN, cubeLayer: CubeLayer.RIGHT };

		case Notation.F:
			return { layer: true, twice: false, direction: Direction.RIGHT, cubeLayer: CubeLayer.FRONT };
		case Notation.Fp:
			return { layer: true, twice: false, direction: Direction.LEFT, cubeLayer: CubeLayer.FRONT };
		case Notation.F2:
			return { layer: true, twice: true, direction: Direction.LEFT, cubeLayer: CubeLayer.FRONT };

		case Notation.B:
			return { layer: true, twice: false, direction: Direction.LEFT, cubeLayer: CubeLayer.BACK };
		case Notation.Bp:
			return { layer: true, twice: false, direction: Direction.RIGHT, cubeLayer: CubeLayer.BACK };
		case Notation.B2:
			return { layer: true, twice: true, direction: Direction.RIGHT, cubeLayer: CubeLayer.BACK };

		case Notation.U:
			return { layer: true, twice: false, direction: Direction.LEFT, cubeLayer: CubeLayer.TOP };
		case Notation.Up:
			return { layer: true, twice: false, direction: Direction.RIGHT, cubeLayer: CubeLayer.TOP };
		case Notation.U2:
			return { layer: true, twice: true, direction: Direction.RIGHT, cubeLayer: CubeLayer.TOP };

		case Notation.D:
			return { layer: true, twice: false, direction: Direction.RIGHT, cubeLayer: CubeLayer.BOTTOM };
		case Notation.Dp:
			return { layer: true, twice: false, direction: Direction.LEFT, cubeLayer: CubeLayer.BOTTOM };
		case Notation.D2:
			return { layer: true, twice: true, direction: Direction.LEFT, cubeLayer: CubeLayer.BOTTOM };

		case Notation.M:
			return { layer: true, twice: false, direction: Direction.DOWN, cubeLayer: CubeLayer.M };
		case Notation.Mp:
			return { layer: true, twice: false, direction: Direction.UP, cubeLayer: CubeLayer.M };
		case Notation.M2:
			return { layer: true, twice: true, direction: Direction.UP, cubeLayer: CubeLayer.M };

		case Notation.E:
			return { layer: true, twice: false, direction: Direction.RIGHT, cubeLayer: CubeLayer.E };
		case Notation.Ep:
			return { layer: true, twice: false, direction: Direction.LEFT, cubeLayer: CubeLayer.E };
		case Notation.E2:
			return { layer: true, twice: true, direction: Direction.LEFT, cubeLayer: CubeLayer.E };

		case Notation.S:
			return { layer: true, twice: false, direction: Direction.LEFT, cubeLayer: CubeLayer.S };
		case Notation.Sp:
			return { layer: true, twice: false, direction: Direction.RIGHT, cubeLayer: CubeLayer.S };
		case Notation.S2:
			return { layer: true, twice: true, direction: Direction.RIGHT, cubeLayer: CubeLayer.S };

		case Notation.x:
			return { layer: false, twice: false, direction: Direction.UP };
		case Notation.xp:
			return { layer: false, twice: false, direction: Direction.DOWN };
		case Notation.x2:
			return { layer: false, twice: true, direction: Direction.DOWN };

		case Notation.y:
			return { layer: false, twice: false, direction: Direction.LEFT };
		case Notation.yp:
			return { layer: false, twice: false, direction: Direction.RIGHT };
		case Notation.y2:
			return { layer: false, twice: true, direction: Direction.RIGHT };

		case Notation.z:
			return { layer: false, twice: false, direction: Direction.TILT_RIGHT };
		case Notation.zp:
			return { layer: false, twice: false, direction: Direction.TILT_LEFT };
		case Notation.z2:
			return { layer: false, twice: true, direction: Direction.TILT_LEFT };

		default:
			throw new Error();
	}
}

let sequenceIdx = 0
let currentSequence: Array<TNotation>

function execute() {
	if (currentSequence && sequenceIdx < currentSequence.length) {
		const move = translateNotation(currentSequence[sequenceIdx])
		if (move.layer) {
			const cubeLayer = assertExists(move.cubeLayer)
			turn(cubeLayer, move.direction, move.twice);
		}
		else {
			turnCube(move.direction, move.twice)
		}
		sequenceIdx++
	}
}

export const next = assertExists(document.getElementById('next')) as HTMLInputElement
next.addEventListener('input', () => execute())

export function executeSequence(sequence: Array<TNotation>): void {
	sequenceIdx = 0
	currentSequence = sequence
	next.dispatchEvent(new InputEvent('input'))
}
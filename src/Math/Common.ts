import { Vector } from './Vector'

/**
 * The namespace that provides constants and methods to perform mathematical computing.
 */
export namespace Common {
    // vector math
    /**
     * Returns the magnitude of a vector, squared.
     * 
     * @param v The vector to calculate.
     */
    export function magnitudeSqrd(v: Vector): number {
        return v.x * v.x + v.y * v.y
    }
    /**
     * An alias for {@link Common#magnitudeSqrd}.
     * 
     * @param v The vector to calculate.
     */
     export function lengthSqrd(v: Vector): number {
        return v.x * v.x + v.y * v.y
    }
    /**
     * Returns the magnitude of a vector.
     * 
     * @param v The vector to calculate.
     */
    export function magnitude(v: Vector): number {
        return Math.sqrt(v.x * v.x + v.y * v.y)
    }
    /**
     * An alias for {@link Common#magnitude}.
     * 
     * @param v The vector to calculate.
     */
     export function length(v: Vector): number {
        return Math.sqrt(v.x * v.x + v.y * v.y)
    }
    /**
     * Returns the distance between 2 vectors, sqaured.
     * 
     * @param a The source vector. 
     * @param b The destination Vector.
     */
    export function distanceSqrd(a: Vector, b: Vector): number {
        let deltaX = a.x - b.x
        let deltaY = a.y - b.y
    
        return deltaX * deltaX + deltaY * deltaY
    }
    /**
     * Returns the distance between 2 vectors.
     * 
     * @param a The source vector. 
     * @param b The destination Vector.
     */
    export function distance(a: Vector, b: Vector): number {
        let deltaX = a.x - b.x
        let deltaY = a.y - b.y
    
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    }
    /**
     * Returns the normalized form of a vector.
     * 
     * @param v The vector to calculate.
     */
    export function normalize(v: Vector): Vector {
        let length = magnitude(v)

        return new Vector(v.x / length, v.y / length)
    }
    /**
     * Returns the dot product of 2 vectors.
     * 
     * @param a Left hand side vector.
     * @param b Right hand side vector.
     */
    export function dot(a: Vector, b: Vector): number {
        return a.x * b.x + a.y * b.y
    }
    /**
     * Returns the cross product of 2 vectors.
     * 
     * @param a Left hand side vector.
     * @param b Right hand side vector.
     */
    export function cross(a: Vector, b: Vector): number {
        return a.x * b.y - a.y * b.x
    }

    // numerical math
    /**
     * Returns the clamped value within the range of `min` and `max`.
     * 
     * @param x The value to clamp.
     * @param min The minimum range, 0 if undefined.
     * @param max The maximum range, 1 if undefined.
     */
    export function clamp(x: number, min = 0, max = 1): number {
        if (min == max)
            return min
        if (min > max)
            throw new RangeError('`min` is greater than `max`.')

        return x < min ? min : x > max ? max : x
    }
    /**
     * Returns a boolean value that determines whether `x` is within the range of `min` and `max`.
     * 
     * @param x The value to test.
     * @param min The minimum range, 0 if undefined.
     * @param max The maximum range, 1 if undefined.
     */
    export function within(x: number, min = 0, max = 1): boolean {
        if (min == max)
            return x == min
        if (min > max)
            throw new RangeError('`min` is greater than `max`.')

        return x > min && x < max
    }
}
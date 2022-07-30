// https://github.com/Janpot/mui-plus/blob/master/packages/mui-plus/src/utils/math.ts

export function clamp(value: number, lower: number, upper: number): number {
  return Math.max(Math.min(value, upper), lower)
}

/**
 * Round half away from zero ('commercial' rounding)
 * Uses correction to offset floating-point inaccuracies.
 * Works symmetrically for positive and negative numbers.
 * See https://stackoverflow.com/a/48764436/419436
 */
export function round(num: number, decimalPlaces = 0): number {
  const p = Math.pow(10, decimalPlaces)
  const n = num * p * (1 + Number.EPSILON)
  return Math.round(n) / p
}

export function scaleLinear(
  rangeMin: number,
  rangeMax: number,
  domainMin: number,
  domainMax: number,
) {
  const range = rangeMax - rangeMin
  const domain = domainMax - domainMin
  return (x: number): number => ((x - rangeMin) / range) * domain + domainMin
}

export function median(nums: number[]): number {
  const sorted = [...nums].sort()
  return (
    (sorted[Math.floor(nums.length / 2)]
      + sorted[Math.ceil(nums.length / 2)])
    / 2
  )
}

export const sum = (nums: number[]) => nums.reduce((acc, value) => acc + value, 0)

export const mean = (nums: number[]) => sum(nums) / nums.length

export function std(nums: number[]): number {
  const m = mean(nums)
  return Math.sqrt(
    nums.reduce((total, n) => total + (n - m) ** 2, 0) / nums.length
  )
}

export interface Stats {
  min: number
  max: number
  mean: number
  median: number
  std: number
}

export interface AggregateStats {
  min: number
  minStd: number
  max: number
  maxStd: number
  median: number
  medianStd: number
  mean: number
  meanStd: number
}

export const stats = (nums: number[]): Stats => {
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
    mean: mean(nums),
    median: median(nums),
    std: std(nums),
  }
}

export const aggregateStats = (results: Stats[]): AggregateStats => {
  const mins = results.map(result => result.min)
  const maxs = results.map(result => result.max)
  const medians = results.map(result => result.median)
  const means = results.map(result => result.mean)
  return {
    min: mean(mins),
    minStd: std(mins),
    max: mean(maxs),
    maxStd: std(maxs),
    median: mean(medians),
    medianStd: std(medians),
    mean: mean(means),
    meanStd: std(means),
  }
}

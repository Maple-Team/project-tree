import { LevInfo } from '../type'

const firMid = '├'
const las = '└'
const vertical = '│'
const horizontal = '─'
export default function (levInfos: LevInfo[]): {
  maxLen: number
  lines: any
} {
  let maxLen = 0

  const lines = levInfos.map(({ pathName, level, lasStatus }: LevInfo) => {
    let line = ''
    line += lasStatus
      .slice(1, lasStatus.length - 1)
      .map((item: number) => {
        return item ? '   ' : `${vertical}  `
      })
      .join('')
    let lastIcon = ''
    if (level > 0) {
      lastIcon = (lasStatus.slice(-1)[0] ? las : firMid) + horizontal + ' '
    }
    line += lastIcon
    const lineName = `${line}${pathName}`
    maxLen = lineName.length > maxLen ? lineName.length : maxLen
    return lineName
  })

  return { maxLen, lines }
}

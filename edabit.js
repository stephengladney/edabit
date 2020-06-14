function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1)
}

function countTrue(arr) {
  return arr.reduce((acc, i) => (!!i ? acc + 1 : acc), 0)
}

function isRepdigit(num) {
  return (
    Number(num) > 0 && Array.from(new Set(String(num).split(""))).length === 1
  )
}

function combinations(...items) {
  return items.reduce(
    (result, item) => (item !== 0 ? result * item : result),
    1
  )
}

function trackRobot(...steps) {
  let [c, x, y] = [0, 0, 0]
  steps.forEach(step => {
    if (c === 0) y = y + step
    if (c === 1) x = x + step
    if (c === 2) y = y - step
    if (c === 3) x = x - step
    c = c === 3 ? 0 : c + 1
  })
  return [x, y]
}

function reverseOdd(str) {
  return str
    .split(" ")
    .map(word => (word.length % 2 ? [...word].reverse().join("") : word))
    .join(" ")
}

function reversedBinaryInteger(num) {
  return parseInt(
    Number(num)
      .toString(2)
      .split("")
      .reverse()
      .join(""),
    2
  )
}

function additivePersistence(n, iteration = 0) {
  if (String(n).length === 1) return iteration
  const result = String(n)
    .split("")
    .reduce((count, num) => (count = count + Number(num)), 0)

  return additivePersistence(result, iteration + 1)
}

function multiplicativePersistence(n, iteration = 0) {
  if (String(n).length === 1) return iteration
  const result = String(n)
    .split("")
    .reduce((count, num) => (count = count * Number(num)), 1)

  return multiplicativePersistence(result, iteration + 1)
}

function redundant(str) {
  return () => str
}

function insertWhitespace(s) {
  return String(s)
    .split("")
    .map((letter, index) => {
      const nextLetter = s[index + 1]
      return letter === letter.toLowerCase() &&
        !!nextLetter &&
        nextLetter === nextLetter.toUpperCase()
        ? `${letter} `
        : letter
    })
    .join("")
}

function oddishOrEvenish(num) {
  return String(num)
    .split("")
    .reduce((total, i) => total + Number(i), 0) %
    2 ===
    0
    ? "Evenish"
    : "Oddish"
}

function doubleChar(str) {
  return str
    .split("")
    .map(letter => `${letter}${letter}`)
    .join("")
}

function stringFret(st, fr) {
  if (st < 1 || st > 6 || fr < 0 || fr > 24) return "Invalid input"
  const chromaticScale = [
    "C",
    "C#/Db",
    "D",
    "D#/Eb",
    "E",
    "F",
    "F#/Gb",
    "G",
    "G#/Ab",
    "A",
    "A#/Bb",
    "B"
  ]
  const guitarFrets = chromaticScale
    .concat(chromaticScale)
    .concat(chromaticScale)
  const standardTuning = [4, 11, 7, 2, 9, 4]
  return guitarFrets[standardTuning[st - 1] + fr]
}

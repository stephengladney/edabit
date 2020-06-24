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

function majorityVote(arr) {
  const votes = {}
  arr.forEach(vote => {
    if (votes[vote]) votes[vote] = votes[vote] + 1
    else votes[vote] = 1
  })
  for (let vote in votes) {
    if (votes[vote] > Math.floor(arr.length / 2)) return vote
  }
  return null
}

function cuttingGrass(arr, ...cuts) {
  return cuts.map(c => {
    let areAnyDone = false

    arr = arr.map(l => l - c)

    arr.forEach(newLength => {
      if (newLength <= 0) areAnyDone = true
    })
    return areAnyDone ? "Done" : arr
  })
}

function sortContacts(names, sort) {
  if (!names) return []
  return names.sort((a, b) => {
    const aLastName = a.split(" ")[1]
    const bLastName = b.split(" ")[1]
    if (sort === "DESC") return bLastName > aLastName ? 1 : -1
    if (sort === "ASC") return bLastName > aLastName ? -1 : 1
  })
}

class Pagination {
  constructor(items = [], pageSize = 10) {
    this.items = items
    this.pageSize = parseInt(pageSize)
    this.totalPages =
      items.length === 0 ? 1 : Math.ceil(items.length / pageSize)
    this.currentPage = 1
    this.paginated = []

    for (let i = 0; i < items.length; i = i + this.pageSize) {
      this.paginated.push(this.items.slice(i, i + this.pageSize))
    }
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage = this.currentPage - 1
    return this
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1
    }
    return this
  }

  firstPage() {
    this.currentPage = 1
    return this
  }

  lastPage() {
    this.currentPage = this.totalPages
    return this
  }

  goToPage(page) {
    page = parseInt(page)
    if (page > 1 && page < this.totalPages) this.currentPage = page
    else if (page <= 1) this.currentPage = 1
    else if (page >= this.totalPages) this.currentPage = this.totalPages

    return this
  }

  getVisibleItems() {
    return this.paginated[this.currentPage - 1]
  }
}

function apocalyptic(n) {
  const index = String(BigInt(Math.pow(2, n))).search("666")
  return index !== -1
    ? `Repent! ${index} days until the Apocalypse!`
    : "Crisis averted. Resume sinning."
}

function getTotalPrice(groceries) {
  return (
    groceries.reduce((acc, item) => {
      return acc + item.quantity * (item.price * 100)
    }, 0) / 100
  )
}

function isGoalScored(goal) {
  const isBallWithinPosts = index => {
    const ball = String(...goal[index]).indexOf("0")
    return ball >= 3 && ball <= 7
  }
  return isBallWithinPosts(0) || isBallWithinPosts(1) || isBallWithinPosts(2)
}

function uniqueStyles(albums) {
  const uniqueStyles = new Set([])
  albums.forEach(album => {
    album
      .replace(/ /g, "")
      .split(",")
      .forEach(genre => uniqueStyles.add(genre))
  })
  return uniqueStyles.size
}

function firstRepeat(chars) {
  const seenCharacters = {}
  for (let i = 0; i < chars.length; i++) {
    if (seenCharacters[chars[i]]) return chars[i]
    else seenCharacters[chars[i]] = true
  }
  return "-1"
}

function filterArray(arr) {
  return arr.filter(i => typeof i !== "string")
}

function charCount(myChar, str) {
  return str.split("").filter(char => char === myChar).length
}

function repetition(txt, n = 1) {
  return n === 1 ? txt : txt.concat(repetition(txt, n - 1))
}

function flattenArray(arr, levels = 1, currentLevel = 0) {
  const result = []
  arr.forEach(i => {
    if (Array.isArray(i) && currentLevel < levels)
      result.push(...flattenArray(i, levels, currentLevel + 1))
    else result.push(i)
  })
  return result
}

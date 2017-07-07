const bluntHash = string => {
  let acc = 0
  for (const char of string) {
    const code = char.charCodeAt()
    acc += code
  }

  return acc % 10
}

// or one-liner
// return string.split('').reduce((a, c) => a += c.charCodeAt(0), 0) % 10

module.exports = bluntHash

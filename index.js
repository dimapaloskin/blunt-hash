const bluntHash = string => {
  // accumulator
  let acc = 0
 
  // process each letter of a passed string
  for (const char of string) {
    // charCodeAt converts character to a number
    // for example "s" character will be 115, "a" chatacter will be 97, etc...
    const code = char.charCodeAt()
    acc += code
  }

  // remainder of division
  return acc % 10
}

// or one-liner
// return string.split('').reduce((a, c) => a += c.charCodeAt(0), 0) % 10

module.exports = bluntHash

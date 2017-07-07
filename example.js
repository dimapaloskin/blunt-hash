const { bold, green } = require('chalk')
const bluntHash = require('./')

const firstHash = bluntHash('first')
const secondHash = bluntHash('second')
const thirdHash = bluntHash('third')
const fourthHash = bluntHash('fourth')
const fifthHash = bluntHash('fifth')

console.log(bold('first:'), green(firstHash))
console.log(bold('second:'), green(secondHash))
console.log(bold('third:'), green(thirdHash))
console.log(bold('fourth:'), green(fourthHash))
console.log(bold('fifth:'), bold.red(fifthHash), bold.red(' - collision with "third"!'))

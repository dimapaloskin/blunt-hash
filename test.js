import test from 'ava'
import bluntHash from './'

test('"first" should return 2', t => {
  const result = bluntHash('first')
  t.is(result, 2)
})

test('"second" should return 6', t => {
  const result = bluntHash('second')
  t.is(result, 6)
})

test('"third" should return 9', t => {
  const result = bluntHash('third')
  t.is(result, 9)
})

test('"fourth" should return 4', t => {
  const result = bluntHash('fourth')
  t.is(result, 4)
})

test('"fifth" should return 9', t => {
  const result = bluntHash('fifth')
  t.is(result, 9)
})

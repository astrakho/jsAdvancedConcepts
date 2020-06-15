console.log('Start 1')

console.log('Start 2')

function timeout2sec() {
  console.log('timeout2sec')
}


setTimeout(function() {
  console.log('Inside Timeout, after 0 seconds')
}, 0)

setTimeout(timeout2sec, 2000)

console.log('End')
var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase 

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase

function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
 console.logShout(string).toUpperCase
 return string.toUpperCase()
}

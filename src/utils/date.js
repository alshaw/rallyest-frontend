export function getDate (input) {
  let date = new Date(input)
  let options = {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }

  return date.toLocaleTimeString('en-us', options)
}

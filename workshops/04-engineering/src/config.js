let apiUrl = 'http://localhost:3002'
if (process.env.NODE_ENV === 'production') {
  apiUrl = ''
}
export {
  apiUrl
}

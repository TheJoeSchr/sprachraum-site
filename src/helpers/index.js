export const toBr = (str) => (str ? str.replace(/(?:\r\n|\r|\n)/g, '<br>') : '')
export const toEmailLinebreak = (str) =>
  str ? str.replace(/(?:\r\n|\r|\n)/g, '%0A') : ''

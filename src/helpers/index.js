export const toBr = (str) =>
  str && typeof str === 'string' ? str.replace(/(?:\r\n|\r|\n)/g, '<br>') : ''
export const toEmailLinebreak = (str) =>
  str ? str.replace(/(?:\r\n|\r|\n)/g, '%0A') : ''

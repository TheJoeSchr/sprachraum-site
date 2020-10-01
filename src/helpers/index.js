export const toBr = (str) => (str ? str.replace(/(?:\r\n|\r|\n)/g, '<br>') : '')

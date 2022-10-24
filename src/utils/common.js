export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 1)}...`
}

export function randomNumberInRange(a, b) {
  if (a >= b) return -1

  const random = Math.random() * (b - a)
  return Math.round(random) + a
}

export function chooseRandom <T> (items: T[]): T {
  const idx = Math.floor(Math.random() * items.length)
  return items[idx]!
}

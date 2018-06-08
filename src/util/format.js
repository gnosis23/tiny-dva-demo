
export function songTimeFormat(length) {
  return `${(length/60).toFixed(0)}:${(length % 60) < 10 ? 0 : ''}${length%60}`;
}

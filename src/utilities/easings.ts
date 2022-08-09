export const easeInOutExpo = (t, b, c, d) => {
  if (t == 0) return b
  if (t == d) return b + c
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
}

export const easeInOutCubic = (t, b, c, d) => {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b
    return c / 2 * ((t -= 2) * t * t + 2) + b
}

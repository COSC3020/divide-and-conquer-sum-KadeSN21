function divideAndConquerSum(a) {
  if (a.length == 0) return 0
  if (a.length == 1) return a[0] 
  let mid = Math.floor(a.length / 2)
  let left = divideAndConquerSum(a.slice(0, mid))
  let right = divideAndConquerSum(a.slice(mid))
  return left + right
}
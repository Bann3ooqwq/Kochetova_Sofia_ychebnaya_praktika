const siteA = ['anna', 'ivan', 'anna', 'petr', 'olga']
const siteB = ['ivan', 'anna', 'sergey', 'olga', 'ivan']
const set = new Set(siteA)
console.log(set)
console.log(set.size)
console.log(set.has('petr'))
const allVisitors = new Set([...siteB, ...siteA])
console.log(allVisitors)
const massiv = [...allVisitors]
console.log(massiv)

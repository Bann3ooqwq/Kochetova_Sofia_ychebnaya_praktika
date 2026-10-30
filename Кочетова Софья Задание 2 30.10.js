const phoneBook = new Map()
phoneBook.set('Ivanov', '+7-900-111-222-33')
phoneBook.set('Petrova', '+7-900-444-55-66')
phoneBook.set('Sidorov', '+7-900-777-88-99')
const petr = phoneBook.get('Petrova')
console.log(petr)
const netSidora = phoneBook.delete('Sidorov')
console.log(phoneBook.size)
console.log(phoneBook.has('Sidorov'))
const massiv = [...phoneBook.keys()]
console.log(massiv)
const massivv = [...phoneBook.values()]
phoneBook.forEach((value, key) => { console.log(`${key}: ${value}`); })
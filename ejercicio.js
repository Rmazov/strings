let nombre ="Ricardo"
let apellido ="Mazo"
let estudiante = (`${nombre} ${apellido}`)
console.log(estudiante)
let estudianteMayus = (estudiante.toUpperCase())
console.log(estudianteMayus)
let estudianteMinus = (estudiante.toLowerCase())
console.log(estudianteMinus)
let lettersEstudiante = estudiante.length
console.log(lettersEstudiante)
let firstLetter = nombre.charAt(0)
console.log(firstLetter)
let numerLetterLastN = apellido.length -1
console.log(numerLetterLastN)
let lastLetterLastN = apellido.charAt(numerLetterLastN)
console.log(lastLetterLastN)
let estudianteSinEspacios = estudiante.replace(' ', '')
console.log(estudianteSinEspacios)
let booleana = estudiante.includes("Ricardo")
console.log(booleana)
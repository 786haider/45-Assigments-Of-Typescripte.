interface  item {
    name:string
    price:number
}
//create two objects using interface.
const book: item ={
    name: `Hundred Great Peoples`,
    price:800
}
const apple: item={
    name:`apple`
    price:400
}
console.log(`book name: ${book.name},price$${book.price}`)
console.log(`apple name: ${apple.name},price$${apple.price}`)
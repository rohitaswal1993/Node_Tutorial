const fs=require("fs")
// const book={
//     title:"Ego is the enemy",
//     author:'Ryan Holiday'
// }
// const bookJSON =JSON.stringify(book);
// console.log(bookJSON)
// console.log(bookJSON.title)
// const parseJSON = JSON.parse(bookJSON)
// console.log(parseJSON.title)
// fs.writeFileSync('1-json.json',bookJSON)
//const dataBuffer= fs.readFileSync('1-json.json');
//console.log(dataBuffer)
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
console.log(data);
data.name="Rohit"
data.age=28
console.log(data)
dataString=JSON.stringify(data)
console.log(dataString)
fs.writeFileSync('1-json.json',dataString)

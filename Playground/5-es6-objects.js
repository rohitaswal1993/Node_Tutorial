// object property shorthand
const name ='Andrew'
const userAge=27
const user={
    name,
    age:userAge,
    location:'Philadelphia'
}
console.log(user)
const product={
    label:'Red notebook',
    price:3,
    stock:20,
    saleprice:undefined,
    rating:4.2
}
const {label:productLabel,stock,rating=5}=product
console.log(productLabel,stock,rating)
const transaction=(type,{label,stock})=>{
    console.log(type,'label :',label,'stock :',stock)
}
transaction('order',product)

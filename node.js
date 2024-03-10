// console.log('where u')

// c=5 + 10

// console.log(c)


// const objA = {
//     a:10,
//     v:'asd'
// }
// const objB=objA
// objB.v='non'
// objB.c=12
// console.log(objB)
// console.log(objA)

// function a (){
//     console.log('12313')
// }
// a()

// const a = () =>{
//     console.log('1231231')
// }
// a()

// const dic={
// }
// console.log(dic)
// dic.city='New york'
// dic.street='naberechnaya'
// delete dic.city
// console.log(dic)

// const names={}
// names['firstName']='Egor'
// const secondName = "secondName"
// names[secondName] ='stepanov'
// console.log(names)

// const city={
//     name:'piter',
//     count:{
//         cats:200000,
//         dogs:20000
//     }
// }
// console.log(city)
// city.count.dogs=3000
// console.log(city)

// const a={
//     stopapupa () {
//         console.log('fdssdf')
//     }
// }
// a.stopapupa()

// const dic={
//     word: 'blue',
//     car:'red'
// }
// const dic_stringify=JSON.stringify(dic)
// console.log(JSON.parse(dic_stringify))

// const person={
//     age:24,
//     hight:171
// }
// // const Name=Object.assign({},person)
// const Name=JSON.parse(JSON.stringify(person))
// Name.age=43
// console.log(person)
// console.log(Name)

// const farm={
//     cow:21,
//     pig:23
// }

// function increaseCow(animal){
//     animal.cow+=1
//     return animal
// }

// increaseCow(farm)
// console.log(farm)

// const market={
//     carrot:23,
//     tomato:12
// }
// function add_market(item){
//     const awdscasd=Object.assign({},item)
//     awdscasd.carrot+=1
//     return awdscasd
// }

// const stall= add_market(market) 
// console.log(stall)
// console.log(market)

// function earth(a,b){
//     c=a+b
//     return c
// }
// function moon(func_Items){
//     c=func_Items(2,5)
//     console.log(c)
// }
// moon(earth)


// let a
// let b

// function switcH() {
//     let b
//     a=true
//     b=10
//     console.log(b)
// }
// switcH()
// console.log(a)
// console.log(b)

// const a={ 
//     widht:200,
//     hight:200
// }
// const b={
//     ...a,
//     color:"red"
// }

// console.table(b)


// const city='kazan'
// const name='pavel'

// const text= `${city}cnkafwef ${name}`
// console.log(text)

// const family ={
//     person: 2,
//     sex: 'Womans'
// }

// const save =(info,timeNow=Date())=>({
//     ...info,
//     timeNow
// })
// // не явный возрат объекта
// c=save(family)
// console.log()


// const fnError=()=>{
//     throw new Error('somdede error')
// }

// fnError()
// console.log('continue..')e

// const fnError=()=>{
//     throw new Error('somdede error')
// }
// try {
//     fnError()
// } catch (error) {
//     console.error(error)
//     console.log(error.massage)
// }

// console.log('continue..')

// const massiv = [1,2,3,4]

// const multiplay=massiv.forEach(element => { 
//         console.log(element*2)
// });
// console.log(multiplay)

// const massiv = [1,2,3,4]

// const newMassiv=massiv.map((el)=>{
//     return el*3
// });
// console.log(massiv)
// console.log(newMassiv)

// const family ={
//     mom:34,
//     dad:45,
//     son:12
// }

// const {mom,dad,son}=family
// console.log(son)

// const market=['banana','orange']

// const [first,second]=market

// console.log(first)
// console.log(second)

// const market={
//     open:true,
//     count:100,
//     stuff:3
// }

// const check =({open,stuff})=>{
//     if (!open) {
//         return`market ${open} bcs false`
//     }
//     return `market ${open} and we have ${stuff}`
// }

// x=check(market)
// console.log(x)

// const month = 2

// switch (month) {
//     case 12:
//         console.log("dec")
//         break
//     case 2:
//         console.log("de32234234234343c")
//         break    
//     case 1:
//         console.log("de23c")
//         break
//     case 122:
//         console.log("dec3")
//         break        
//     default:
//         console.log("sick")
// }


// const value=-5

// const res = value >= 0 
//     ? value 
//     : -value

// console.log(res)
// console.log(value)

// const myArray=["one","two","three"]

// myArray.forEach((element,v)=>{
//     console.log(element,v)
// })

// let i=0

// while (i<4){
//         console.log(i)
//         i++
// }

// let i=10

// do{
//     console.log(i)
// }while(i<1)

// const object={
//     a:323,
//     v:2423
// }
// for (const key in object){
//     console.log(key,object[key])
// }


// const object={
//     a:3434,
//     b:3343
// }

// Object.values(object).forEach(value=>{
//     console.log(value)
// })
// Object.keys(object).forEach(keys=>{
//     console.log(keys)
// })


// const word="hello"

// for ( const letter of word){
//     console.log(letter)
// }

// class Comment{
//     constructor(text){
//         this.text=text
//         this.count=0
//     }
//     upvot(){
//         this.count+=1
//     }
// }   

// const firstcount = new Comment('hello')
// firstcount.upvot()
// console.log(firstcount)


class Comment{
    constructor(text){
        this.text=text
        this.count=0
    }
    upvot(){
        this.count+=1
    }
    static mergeComment(one,two){
        return `${one} ${two}`
    } 
}  


console.log(Comment.mergeComment("first","second"))
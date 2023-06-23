
    // 1 ways to print javascripts
    //console.log(a)

    //2.  javascripts console API

    //console.warn('this is warning')
    //console.error("this is an error")

    // 3 javascript Variable

    // containers to store data values
    //var a = 10
    //console.log(a)
    /* at very high level there are two types of data type in javascript 
    1 Primitive data type: undefined ,null,number,string,boolean,symbol
    2 Refrence data type:Array and Objects
    */

    //var arr =[1,2,3,"string",5,6]
    //console.log(arr)

    //indexing in javascripts
    //console.log(arr[1])
    //console.log(arr[2])
    //console.log(arr[3])

    //Logical and Operator

    //console.log(true && true) op return true
    //console.log(true && false) op return true
    //console.log(false && true) //op return false
    //console.log(true && false) //op return false

    // logical or Operator
    //console.log(true || true)
    //console.log(true || false)
    //console.log(false || true)
    //console.log(false || false)

    //logical not operator
    //console.log(!false) op true
    //console.log(!true) op false

    //function

    //function avg(a,b){
        //return (a+b)/2;
   // }

   // c1 = avg(2,2)
    //console.log(c1)

    //if else condition
    /*
    var age = 34;
    if (age > 8){
        console.log('You are not a kid')
    }
    else{
        'you are a kid'
    }
    */

   //loop using javacripts
 /*
   var arr = [1,2,3,4,5,6,7];
   arr.forEach(function(element){
    console.log(element)
   })
   */

   //find length of array
   /*
   let arr = ['fan','camera',34,null,true]

   console.log(arr.length);
   */

   //pop elements form array 

   //let arr = ['fan','camera',34,null,true]

   //arr.pop();
   //arr.pop()
   //console.log(arr)
   //console.log(arr)


/* javascripts date 

let myDate = new Date();
console.log(myDate)
Fri Jun 09 2023 13:05:19 GMT+0530 (India Standard Time) */
//let myDate = new Date();

//console.log(myDate.getTime());
//console.log(myDate.getDay());

//DOM Manipulation

//call data by id
/*
let elem = document.getElementById('#click')

console.log(elem)
*/

// insted of writing full function we can use arrow function

/*
summ = (a,b)=>{
    return a+b;
}
*/

/*
logkaro = () =>{
    console.log('I am Log')
}

//this function will dislpay or run function after 2 second 
setTimeout(logkaro,2000);
*/

// it will call the message with class container and display message devanshu
/* document.querySelectorall('.container').innerHTML = "devanshu"*/

//javascripts localstorage
//localstorage will help to save data in user computer as a string

// setitem will store the data in user storage
//localStorage.setItem('name','devanshu')
//console.log(localStorage)

//localStorage.getItem('name')
//console.log(localStorage)

//json
//obj = {name:"devanshu"} //json object
//jos = JSON.stringify(obj) // convert to json string
//console.log(jos)
//console.log(typeof(jos)) //check type string string


//parsed = JSON.parse(jos)
//console.log(typeof(parsed));

//promisses :- promiss will execute the task at same time
/*
let p = new Promise((resolve,reject)=>{
    console.log('promise is pending')
     setTimeout(()=>{
        //alert('I am a promise and i am fullfill')
        resolve(true)  //when promis is accecpted it will return value
     },5000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log('promise is pending')
     setTimeout(()=>{
        alert('I am a promise and i am rejected')
        reject(new Error(" I am an error"))  //when promis is accecpted it will return value
     },5000)
})

p.then((value)=>{
    console.log(value)
})
p2.catch((error)=>{
    console.log("some error occure in p2")
})
*/


/*
//promise api
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("value1")
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Value2')
        resolve(true)
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("value 3")
        reject(false)
    },3000)
})


let promise_all = Promise.all([p1,p2,p3])
promise_all.then((value) => {
    console.log(value)
    resolve(true)
})

*/

// we can make any function async and then we can make promise await

/*
// async will makesure that promise is return
// await function will wait until above request is fullfill or not 
async function Weatherfunction(){
    let delhiweather = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(console.log('30 degree'))
        },10000)
    })

    let bangloreweather = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(console.log('40 degree'))
        },2000)
    })

    let delhiW = await delhiweather
    let bangloreW = await bangloreweather
    return [delhiW,bangloreW]
}

let a = Weatherfunction()
console.log(a)

o/p
Promise {<pending>}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
Array(2)
0
: 
undefined
1
: 
undefined
length
: 
2
*/
















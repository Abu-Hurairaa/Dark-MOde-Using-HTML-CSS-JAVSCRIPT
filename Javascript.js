// Variables
// var a=2;
// let f=20;
// const $Name="Abu Huraira Jameel"
// console.log("The number is"  + a +  "and" +  f  +  "name  is"  + $Name);

// // Conditional Statements (If-elase Statements)
// var age=4;
// if(age>10){
//     console.log("you can drive Car");
// }
// else{
//     console.log("You cannot drive the car.")
// }

// Loops (While, do while, for, for of, for in ,for each)
// let student={
//     Name:"Abu Huraira",
//     Roll_no:48,
//     Subject:"Javascript",
//     Marks: 75
// };
// for(var items in student){
//     console.log(student.Marks);
// }
// let a =5
// function factorial (number){
//     let arr = Array.from(Array(number+1).keys())
//     let c= arr.slice(1,).reduce((a,b)=>a*b)
//     return c
// }
// function facFor(number){ 
//     let fac=1;
//     for(let i=1; i<=number; i++){
//         fac = fac*i
//     }
//     return fac
// }
// console.log(factorial(a))
// console.log(facFor(a))

// 1.method one using reduce and array
// let a=prompt("enter the number")
// let b=parseInt(a)
// let arrr=[]
// for(let i=1;i<=b;i++){
//     arrr.unshift(i)
    
// }
// console.log(arrr.reduce((a,b)=>{
//     return a*b;
// }))

// let fact=(n)=>{
//     if(n<0){
//         console.log("we can't take factorial for negative numbers")
//     }
//     let facdt=1
//     for(let i=1;i<=n;i++){

//         facdt*=i
        
//     }
//     console.log(facdt);
// }
// console.log(fact(5))
// console.log("Huraira")
// let boxes = document.getElementsByClassName("box")
// function  getrandomColor(){
//     let Val1  =Math.ceil(0+Math.random()*255);
//     let Val2= Math.ceil(0+Math.random()*255);
//     let Val3 = Math.ceil(0+Math.random()*255);
//     return `rgb(${Val1}, ${Val2}, ${Val3})`
// }


// Array.from(boxes).forEach(e => {
//     e.style.backgroundColor = getrandomColor();
//     e.style.color = getrandomColor();
// });
// const productName= "Parker Jotter Standard CT Ball Pen";
// const ratings= 4;
// const Price = 120;
// console.log(productName,ratings,Price)
// const product={
//     Title : "Ball pen",
//     ratings: 4,
//     Price : 150,
//     offer : 5,
// };
// console.log(product)

// const Profile ={
//     Name : "Shradha Khapra",
//     Follower: 56900,
//     Following : 4,
//     Posts : 195,
//     IsFollow : false,
//     Details: "Apna College |Ex.Microsoft DRDO To Educate Somone is first Priority",
// };
// console.log(Profile, typeof Profile)

// const a=prompt("Enter a number which is multiple of 5");
// const b=a;
// if(a%5===0){
//     console.log("this is multiple of " + b);
// }
// else{
//     console.log("Please enter Only Multiple of 5")
// }

// let Marks=prompt("Enter Your Marks To check Grades");

// if(Marks<=49){
//     console.log("Your grade is F")
// }
// else if(Marks>=50 && a<=59){
//     console.log("your grade is D")
// }
// else if(Marks>=60 && a<=69){
//     console.log("your grade is C")
// }
// else if(Marks>=70 && a<=79){
//     console.log("your grade is B")
// }
// else if(Marks>=80 && a<=100){
//     console.log("your grade is A")
// }
// else {
//     console.log("Number are out of mind😒")
// }

// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum= sum+i ;
// }
// console.log("sum is =", sum)
// let i=6 ;
// if(i<=5){
//     console.log(i++)
// }
// else{
//     console.log(++i)
// }
// for(num=0; num<=100; num++){
//     if(num%2===0){
//         console.log("num is",num)
//     }
// }
// let game=10;

// let number=prompt("Guess the number");
// while(number!=game){
//    number = prompt("You enter wrong number, try again");
// }
// console.log("You win");

// let fullName=prompt("Enter Full Name");
// console.log(fullName);
// let username="@" + fullName + fullName.length;
// console.log(username);
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum=sum+val; 

// }
// let avg=sum/marks.length;
// console.log(`Average marks are = ${avg}`)
 
// let items=[250,645,300,900,50];
// for(i=0; i<items.length; i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
   
// }
// console.log(`Nem price after discount = ${items}`)

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(2,2,"Ola","Apple");
// // companies.push("Amazon");
//   console.log(companies)

// const multiply=(a,b)=>{
//   console.log(a*b);
//   console.log(a+b);
// }
// console.log(multiply(3,3));
// console.log(multiply(2,3));
// console.log(multiply(3,4));
// function countvowels(word){
//     let count=0;
//     for (const char of word){
//         if(word==="a" || word==="e" || word==="i" || word==="o" || word==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// countvowels("Hello Worlds");
// console.log(countvowels)
// let arr=[1,3,5,7,4,7,2]
// arr.forEach(al => {
//     console.log(al**2);
// });

// let marks=[33,45, 70, 67,80, 91,98,94]
// let finalMarks=marks.filter(high=>{
//     return high>90;
// });
// console.log(finalMarks);
// let n= prompt("enter a number");
// let arr= [];
// for (let i=1; i<=n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum = arr.reduce((res, curr) => {
//     return res+ curr;
// })
// console.log(sum);
// function square(n){
//    return n*n;
// }
// console.log(square(4))

// function Celcius(cel){
//     return (cel*9/5)+32;

// };
// console.log("Fahrenheit of  Celcius" + Celcius(0));
// function reverseNum(num) {
//     var reverse = 0;
//     while(num != 0)
//     {
//       reverse = reverse * 10;
//       reverse = reverse + num%10;
//       num = Math.trunc(num/10); // Remove decimal places
//     }
//     return reverse;
//   }
  
//   console.log(reverseNum(10)) //321
//   console.log(reverseNum(5872)) //2785

// let newBtn= document.createElement("button");
// newBtn.innerText="Click Me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// let body= document.querySelector("body").prepend(newBtn);

// // document.querySelector("p").classList.add("newclass");
// document.getElementById("id").setAttribute("class","graph");

let modeBtn=document.querySelector("#mode");
let current="light";
modeBtn.addEventListener("mouseover", ()=>{
    if(current==="light"){
        current="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("button").innerText="Dark";
        document.querySelector("p").tyle.color="white";
    }
    else{
        current="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("button").innerText="Light";
        document.querySelector("p").style.color="black";
    }

})
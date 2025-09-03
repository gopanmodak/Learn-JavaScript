/* //Function
function myFunction(){
    console.log("Hello World !!");
    console.log("Good Morning");
    console.log("Good Afternoon");
    console.log("Good Evening");
    console.log("Good Night");

}
myFunction();


function myFunction(name){
    console.log(name)
}
myFunction("Gopan Kumer Modak");

//Create a function calculate -->2

function calculate(num1,num2){
    console.log(` Sum is : ${num1+num2}`)
    
}
calculate(20,50);


function sum (x,y){
    s=x+y;
    return s;
}
sum = sum(20,50);
console.log(sum);
*/


//Sum Function using Function Expression


const sum=(x,y)=>{
    console.log(`Sum is : ${x+y}`);

}
sum(20,15);
const div=(x,y)=>{
    console.log(`Div is : ${x/y}`);

}
div(20,15);
const mult=(x,y)=>{
    console.log(`Multi is : ${x*y}`);

}
mult(20,15);
const sub=(x,y)=>{
    console.log(`Sub is : ${x-y}`);

}
sub(20,15);


const arrowSum=(x,y)=>{
    return x+y;
}
console.log(arrowSum(20,15));



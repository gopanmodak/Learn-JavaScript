/* 
//PQ1
for (let i=0; i<=100; i+=2){
        console.log(i);
        }
        let gameNum="25";
        let userNumber=prompt("Enter a Number ;");
while(userNumber!=gameNum){
    userNumber=prompt('You entered wrong number, try again');
    
}
console.log("Congrats, You Win !!");



//PQ2

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.splice(2,1,"Ola")
companies.shift();
companies.push("Amazon");
console.log(companies);



function countVowels(str){
    let count = 0;
    for (let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u') {
            count++;
        }
    }
    return count;
}
*/




const countVowels=(str)=>{

    let count = 0;
for (let char of str){
   if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u') {
      count++;
   }
}
return count;


}

function isEven (num){
    if (num%2===0){
        return true;
    }
    else{
        return false;
    }
}

let num2=isEven(24)
console.log(num2);

const isEven1=(num)=>{
    if (num%2==0){
        return true;
    }
    else{
        return false;
    }
}

let num3=isEven1(25)
console.log(num3);



function findMax(num1,num2,num3){
    if (num1>num2 && num1>num3){
        return num1;
    }
    else if (num2>num3 && num2>num1){
        return num2
    }
    else{
        return num3;
    }
        
}
let maxNumber=findMax(10,40,30)
console.log(maxNumber);


const findMax1=(num1,num2,num3)=>{
    if (num1>num2 && num1>num3){
        return num1;
    }
    else if (num2>num3 && num2>num1){
        return num2
    }
    else{
        return num3;
    }
        
}
let maxNumber1=findMax1(10,40,30)
console.log(maxNumber1);
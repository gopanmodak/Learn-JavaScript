/*

const studentInfo = {
    name : 'Gopan Kumer Modak',
    id: 1931237,
    cgpa : 3.10,
    department : 'CSE',
    homeTown : 'Tangail',
    currentAddress : 'Senpara,Mirpur-10',
    workAt : 'Dream71',
    position : 'intern',
    favGame :'Football & Cricket'
}

console.log(studentInfo);
console.log ('Name : ' + studentInfo.name);
console.log ('ID: '+ studentInfo['id']);
console.log ('Work at : ' + studentInfo['workAt'])



//Operators

let number = 5;
let squreNumber =number*number;
console.log('\n\n\nSqure Number is : ' + squreNumber);   //Print in Old Model.

let number1=parseInt(prompt('Enter a number'));
let squreNumber1=number1*number1;
console.log(`Squre Number Is :  ${squreNumber1}`);  //Print in dollar ($)

 


let a=7;
let b=3;

console.log('a=', a, '& b=', b);
console.log('a + b =' , a+b);
console.log('a - b =' , a-b);
console.log('a * b =' , a*b);
console.log('a / b =' , a/b);
console.log('a % b =' , a%b);  //The Modulo Operator
console.log('a ** b =' , a**b);   //The Exponentiation Operator 


//Unary Operator
a++;
console.log('a ++ =' , a);   //The Exponentiation Operator 
b--;
console.log('b-- =' , b);
++a;
console.log('++a =' , a);
--b;
console.log('--b =' , b);



//Assignment Operator


a+=4;
console.log('a=',a);
a-=4;
console.log('a=',a);
a*=4;
console.log('a=',a);
a/=4;
console.log('a=',a);
a**=4;
console.log('a=',a);
a%=4;
console.log('a=',a);






let a=5;
let b=3;

console.log('a>b' ,a>b)
console.log('a<b' ,a<b)
console.log('a>=b' ,a>=b)
console.log('a<=b' ,a<=b)


// Conditional Statements


let age=16;
if (age>=18){
    console.log('You can Vote')
}
else{
    console.log('You can not Vote')

}



let mood='White';
let color;
if (mood=='Dark'){
    color="Black";
}
else{
    color='White';
}
console.log(`Color is : ${mood}`);


let number=10;
if (number%2==0){
    console.log(`Number is Even `);

}
else{
    console.log('Number is ODD')
}



let mood1='Red';
let color1;
if (mood1=="Dark"){
  color1='Black'

}
else if(mood1=="White"){
    color1='White'
}
else if(mood1=='Pink'){
    color1='Pink'
}
else{
    color1='Gray'

}

console.log(`Color is : ${color1}`);



let age =5;
let result=age>=18? 'Adult : You can vote' :'Not Adult ?? You can t Vote';
console.log(result);


let letter = (prompt("Enter a letter"));
letter=letter.toLowerCase();
switch (letter) {
    case 'o':
    console.log("Vowel");
    break;
    
    case "a":
        console.log("Vowel");
        break;
        
  case "e":
    console.log("vowel");
    break;
    
    case "i":
        console.log("vowel");
        break;
        case "u":
            console.log("vowel");
            break;
            
            default:
                console.log("Consonant");
                break;
            }
            

            
            
            let number =prompt("Enter a Number : ")
            
            if (number%5===0){
                console.log('Number is Multiple by 5')
            }
            else{
                console.log('Number is NOT Multiple by 5');
        }
        */
/* 

        let mark=prompt("Enter Your Mark : ")
        if (mark>=80 && mark<=100){
            console.log("Your Grade is : A");
        }
        else if (mark>=70 && mark<=79){
            console.log('Your Grade is : B')
        }
        else if(mark>=60 && mark<=69){
            console.log("Your Grade is : C")
        }
        else if (mark>=50 && mark<=59){
            console.log("Your Grade is : D")
        }

        else{
            console.log ("Sorry, You FAILED !!")
        }
 */

        let day=prompt("Enter a Day : ");
        switch(day){
       case '1':
        console.log('Satuarday');
        break;

        case '2':
            console.log('Monday');
            break;

            case '3':
                console.log('Tuesday');
                    break;

                case '4':
                    console.log('Wednesday');
                        break;

                        case '5':
                           
                                    console.log('Friday');
                                        break;
                                        default:
                                            console.log('Friday')

        }




    
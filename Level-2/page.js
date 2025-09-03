/* //For LOOP


for (x=1; x<=20; x++){
  console.log(x);
  
  }
  //While LOOP
  
  let p=1;
  while(p<=15){
    console.log(p);
    p++;
    
    
    
    let p=1;
    do{
      console.log(p)
      p++
    }
    while(p<=25)
      } 
  
 
    let str ='Gopan Kumer Modak';
    let size=0;
    for (let i of str){
      console.log(i);
      size++;
    }
    console.log('Total Size :',size); 



    //for in loop

     let studentInfo={
      name : "Gopan Kumer Modak",
      id : 1931237,
      age : 21,
      cgpa :3.1,
      isWorked : true,
      isMarred : false,
      address : 'Mirpur-10, Dhaka',
      phone : 1712345678
    }

    for (let i in studentInfo){
      //console.log(i);
      console.log(studentInfo[i]);
      
      
    } 
      
      
      
        
        
        let num =0;
        while(num<=100){
          console.log("Even Number is :" ,num);
          num+=2;
        }
        
         
        
        let srt = "Gopan Kumer Modak";
        let srt1=srt.toUpperCase();
        console.log(srt1);

        let srt2 = "Gopan Kumer Modak";
        let srt3=srt.toLowerCase();
        console.log(srt3);
        let srt4 = "           Gopan Kumer         Modak   ";
        let srt5=srt.trim();
        console.log(srt5);


        let sentence="ILoveBangladesh";
        let sentenceNew=sentence.slice(5,14);
        console.log(sentenceNew);

        let firstSentence="My Name Is Gopan";
        let lastSentence=" Kumer Modak";

        anotherSentance=firstSentence.concat(lastSentence);
        console.log(anotherSentance);


        let srt6="Hello";
        srt6=srt6.replace("H","Y");
        console.log(srt6);

        let srt7="I love Bangladesh";
        srt7=srt7.charAt(5);
        console.log(srt7);


        
        */


let fullName=prompt("Enter Your Name : ");
userName='@'+ fullName + fullName.length;
console.log(userName);

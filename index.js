console.log("hi im js ")
const cinstName= "mohammed"
var VarName = "ahmad"
console.log(VarName)
var number1=3
var number2=6
if (number1>number2) {
    console.log("right")
}
else{
    console.log("false") 
}
var choice=5;
/*if (choice===1) {
    console.log("cofee")
    
}
else if(choice ==== 2){
    console.log("water")
}
else if(choice ==== 3){
    console.log("tea")
}
    else if(choice ==== 4){
        console.log("juice")
    }*/
   switch(choice){
    case 1:
        console.log("cofee")
        break;
        case 2:
        console.log("water")
        break;
        case 3:
        console.log("tea")
        break;
        case 4 : 
        console.log("juice")
        break;
        default:
            console.log("please choose ")
            break;
   }
   var title1=document.getElementById('title1')
   title1.innerText=" this is from js"
   title1.style.color="red"
   console.log(title1)
   var newDiv = document.getElementById('newDiv')
   //newDiv.innerHTML=`<h1> this is new h1${consstName} </h1> `
var newClass = document.getElementsByClassName('newTitle')
newClass[1].innerHTML="this is an update for the new list "
var findp= document.getElementsByTagName('p')
//findp[2].innerHTML="farah"
var form=document.getElementById('form')
console.log(form)
for(let i = 0; i<findp.length;i++){
    if(i % 2 == 0){
        findp[i].style.backgroundColor="green"
        console.log('new')
findp [i].innerHTML=" this is an update form for loop"
    }
    else  {
        findp[i].style.backgroundColor="blue"
        console.log('new')
findp [i].innerHTML=" this is an update form for loop"

}
}
var selectedOperation=document.getElementById('selectedOperation')
function sumation (){
   var input1=document.getElementById('input1').value
   var input2=document.getElementById('input2').value
   var z= parseInt(input1)+parseInt(input2)

   var result = document.getElementById('result')
   result.innerHTML=z
}
form.addEventListener('submit',function(event){
event.preventDefault();
var input1=document.getElementById('input1').value
   var input2=document.getElementById('input2').value
   var z= parseInt(input1)+parseInt(input2)

   var result = document.getElementById('result')
   result.innerHTML=z
}
switch(selectedOperation){
    case '+'=
    break;
    case'
}





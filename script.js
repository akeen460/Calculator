
const dis = document.getElementById('display');
const cal = document.getElementById('calcu')


function one(){
    dis.value+= '1';
}
function two(){
    dis.value+= '2';
}
function three(){
    dis.value+= '3';
}
function four(){
    dis.value+= '4';
}
function five(){
    dis.value+= '5';
}
function six(){
    dis.value+= '6';
}
function seven(){
    dis.value+= '7';
}
function eight(){
    dis.value+= '8';
}
function nine(){
    dis.value+= '9';
}
function zero(){
    dis.value+= '0';
}
function add(){
    dis.value+= '+';
}
function sub(){
    dis.value+= '-';
}
function mul(){
    dis.value+= '*';
}
function div(){
    dis.value+= '/';
}

function clesr(){
    dis.value = ' ';
}
function dot(){
    dis.value+= '.';
}


function calculate(){

   const result = (dis.value).toString()
    dis.value =eval(result);
    return result;
}

   
function del(){
   
    let str = dis.value;
    str = str.slice(0, -1);
    dis.value = str;
}

function handleKeyPress(event) {
     
      if (event.key === 'Enter') {
        calculate();
      }
}

const theme = document.getElementById('theme');
const bod = document.querySelector('body')

theme.addEventListener('click',function(){
    bod.classList.toggle('dark')
})




function getSelectedValue(){
    let selectElements = document.getElementById('select1');
    let selectedOption=  selectElements.options[selectElements.selectedIndex];
    let selectedValue = selectedOption.value;
   switch(selectedValue){

    case 1 :
       bod.classList.add('dark');
       break;
    case 2:
         bod.classList.add('middark');
         break;
    case 3:
         bod.classList.add('normal');
        break;
    default:
      console.log("done");
        
} 
    
    
 
}

let x =1;


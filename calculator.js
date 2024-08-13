var display=document.getElementById("display")
function number(input){
    display.value+=input;
}
function equal(){
    display.value=eval(display.value)
}
function clear1(){
    display.value="";
    
}
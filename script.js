'use strict'
window.addEventListener('DOMContentLoaded',()=>{
    const result=document.querySelector('.result');
    document.querySelector('.calculator').addEventListener('click',(event)=>{
    const element=event.target;
    const value=element.innerText;
    if(element && element.tagName==='BUTTON'){
        switch(value){
            case 'C':result.value="";break;
            case '=':result.value=eval(result.value).toFixed(2);break;
            default:
                result.value+=value;
        }
    }
    if(result.value==="undefined"){
        result.value=0;
    }
})
})

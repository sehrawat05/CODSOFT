let circularProgress1=document.querySelector(".circular-progress1"),
progressValue1=document.querySelector(".html");

let progressStartValue1=0,
progressEndValue1=95,
speed1=100;

let progress1=setInterval(()=>{
    progressStartValue1++;
    progressValue1.textContent=`${progressStartValue1}%`
    circularProgress1.style.background=`conic-gradient(#7d2ae8 ${progressStartValue1*3.6}deg,#ededed 0deg)`
    if(progressStartValue1==progressEndValue1){
        clearInterval(progress1);
    }
    
},speed1);
let circularProgress2=document.querySelector(".circular-progress2"),
progressValue2=document.querySelector(".css");

let progressStartValue2=0,
progressEndValue2=90,
speed2=100;

let progress2=setInterval(()=>{
    progressStartValue2++;
    progressValue2.textContent=`${progressStartValue2}%`
    circularProgress2.style.background=`conic-gradient(#7d2ae8 ${progressStartValue2*3.6}deg,#ededed 0deg)`
    if(progressStartValue2==progressEndValue2){
        clearInterval(progress2);
    }
    
},speed2);

let circularProgress3=document.querySelector(".circular-progress3"),
progressValue3=document.querySelector(".js");

let progressStartValue3=0,
progressEndValue3=60,
speed3=100;

let progress3=setInterval(()=>{
    progressStartValue3++;
    progressValue3.textContent=`${progressStartValue3}%`
    circularProgress3.style.background=`conic-gradient(#7d2ae8 ${progressStartValue3*3.6}deg,#ededed 0deg)`
    if(progressStartValue3==progressEndValue3){
        clearInterval(progress3);
    }
    
},speed3);
let circularProgress4=document.querySelector(".circular-progress4"),
progressValue4=document.querySelector(".python");

let progressStartValue4=0,
progressEndValue4=75,
speed4=100;

let progress4=setInterval(()=>{
    progressStartValue4++;
    progressValue4.textContent=`${progressStartValue4}%`
    circularProgress4.style.background=`conic-gradient(#7d2ae8 ${progressStartValue4*3.6}deg,#ededed 0deg)`
    if(progressStartValue4==progressEndValue4){
        clearInterval(progress4);
    }
    
},speed4);
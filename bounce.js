
$(function(){
  www = 0; 
  i = 0;
var button = $("#trigger");
var levelcomments = ["yeah", "you are doing well" , "outstanding!!",  
" badass !!",  "idiot !!",   "idiot !!", 
 "idiot !!",  "idiot !!" 
];

var Timeinterval = [100, 80, 60, 40, 20, 10, 5, 1];  //DECLARED PUBLIC SO AS TO BE MADE USABLE AND CHANGEABLE IN THE BUTTON THROUNG MATHS OPERATION IN THE BUTTON MODULE
var flag = 0; // the value decides the action of the PAUSE/PLAY BUTTON (ASIN WHICH INTERVAL TO CLEAR)




function pushdown(){
if($("#bouncer").css("margin-top") != 460+"px"){
   flag = 1;
   www+=10;
   $("#bouncer").css("margin-top", www );
   
   //console.log($("#bouncer").css("margin-top"))
}
else{
   console.log("stop");
clearInterval(timerdown);
timerup = setInterval(pushup, Timeinterval[i]);
}
}




function pushup(){
   if($("#bouncer").css("margin-top") != 0+"px"){
      flag = 0;
      clearInterval(timerdown);
      www-=10;
      $("#bouncer").css("margin-top", www);
     
      //console.log($("#bouncer").css("margin-top")) 
   }
  else{
    clearInterval(timerup);
     
     timerdown = setInterval(pushdown, Timeinterval[i]);
     }
  }

 




//programing the PAUSE/PLAY BUTTON
button.click(function(){ 
   if(button.html() == "START" ){
     timerdown= setInterval(pushdown, Timeinterval[i]);
     button.html( "PAUSE");

   }
   else if(button.html() == "PAUSE"){
      pause();
      button.html( "PLAY");
   }
   else{
        play();
        button.html( "PAUSE");
   }


});

function pause(){
   if (flag==1){
      clearInterval(timerdown);
      }
      else{
         clearInterval(timerup); 
      }
   
 } 

 function play(){
   if(flag==1){
      timerdown= setInterval(pushdown, Timeinterval[i]);
   }
   else{
      timerup = setInterval(pushup, Timeinterval[i]);
   }
 }
 
 




 
 //PROGRAMMING THE CLICK OF THE CIRCLE




   $("#bouncer").click(function(){

      if(i < Timeinterval.length){

            if(button.html() == "START" ){
               timerdown= setInterval(pushdown, Timeinterval[i]);
               button.html( "PAUSE");
         
            }
            else if(button.html() == "PAUSE"){
               $("#signboard").html( levelcomments[i] +   "<b><br> <br>LEVEL  " + (i+1) + "  COMPLETED !!  <br><br>"  + "  START LEVEL  " +(i+2));
               pause();
               button.html( "PLAY");
               i++
            }
            else{
                  play();
                  button.html( "PAUSE");
                  $("#signboard").html("LEVEL  " + (  i+1));
            }
      }
      else
      {
         $("#signboard").html("THE END <br> PRESS PLAY IF YOU WISH TO START AGAIN IF OR CLOSE YOUR BROWSER TO QUIT GAME ");
         i = 0;
         $("#bouncer").css("margin-top", 0);
      }
       
 })
 
});


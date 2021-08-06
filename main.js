$(document).ready(function(){
  msec = 0;
  sec = 0;
  min = 0;
  $(".start").click(function(){
    timer=setInterval("countUp()", 100);
    $(this).attr("disabled", "disabled");
    $(".stop,.reset").removeAttr("disabled");
  });
  
  $(".stop").click(function(){
    clearInterval(timer);
    $(this).attr("disabled", "disabled");
    $(".start").removeAttr("disabled");
  });
  
  
  $(".reset").click(function() {
     msec=0;
     sec=0;
     min=0;
     $(".timer").html("00:00:0");
     clearInterval(timer);
     $(this).attr("disabled", "disabled");
     $(".start").removeAttr("disabled");
     $(".stop, .reset").attr("disabled", "disabled");
  });
});

function countUp(){
  msec++;
  if(msec > 9){
    msec=0;
    sec++;
  }
  if(sec > 59){
    sec=0;
    min++;
  }
  msecNumber = msec;
  if(sec < 10){
    secNumber="0"+sec.toString();
  }else{
    secNumber = sec;
  }
  if(min < 10){
    minNumber="0"+min.toString();
  }else{
    minNumber = min;
  }
  $(".timer").html(minNumber+":"+secNumber+":"+msecNumber);
}
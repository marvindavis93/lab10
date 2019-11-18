$(function(){
  //hide wrapperDiv class
   $("#btn1").on("click",function(){
      $(".wrapperDiv").hide();   
   });
   
   //show wrapperDiv clas
   $("#btn2").on("click",function(){
      $(".wrapperDiv").show();   
   });
   
   
   $("#btn3").on("click",function(){
       //fill array
       var digits=["one","two","three","four"];
       //for each wrapperDiv class, change innnerhtml to corresponding array element
     $('.wrapperDiv').each(function(i) {       
         $(this).html(digits[i]);        
      });      
      //change css of even and odd
       $(".wrapperDiv").filter( ":even" ).css({"background-color":"black","color":"white"});
       $(".wrapperDiv").filter( ":odd" ).css({"background-color":"white","color":"black"});
   });
   
   //remove style attribute
    $(".wrapperDiv").mouseover(function(){
        $(".wrapperDiv").removeAttr("style");
        //change inner html to numbers
     $('.wrapperDiv').each(function(i) {       
         $(this).html(i+1);        
      });
      //add yellow beckground to active cell
      $(this).css({"background-color":"yellow"});
    });
    
    //remove yellow beckground from active cell
    $(".wrapperDiv").mouseout(function(){
       $(this).removeAttr("style");
    });
});


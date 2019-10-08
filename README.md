# 250px

#montserrat and pt serif?


scroll transition?

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".main-wrapper").addClass("blue");
    } 
    
    //if(scroll>=400) {
    //  $(".main-wrapper").addClass("green");
    //}
  
    else {
       $(".main-wrapper").removeClass("blue");
       //$(".main-wrapper").removeClass("green");
    }
});

/* body {
  background-color: red;
  min-height:1200px;
  transition:background-color 0.75s ease;
} */

.main-wrapper{
   border-left: 9px solid red; 
   /* background-color: red; */
   transition:border-left-color 0.9s ease;
   min-height: 1020px; 
}

.blue {
  border-left-color: blue;
}

.green {
  border-left-color: green;
}
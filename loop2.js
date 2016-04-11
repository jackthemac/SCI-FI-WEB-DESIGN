$(document).ready(function(){
$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator2 =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn2 = 500;
 
            //interval between items (in milliseconds)
            var itemInterval2 = 1000;
 
            //cross-fade time (in milliseconds)
            var fadeTime2 = 1500;
 
            //count number of items
            var numberOfItems2 = $('.rotating-item2').length;
 
            //set current item
            var currentItem2 = 0;
 
            //show first item
            $('.rotating-item2').eq(currentItem2).fadeIn(initialFadeIn2);
 
            //loop through the items
            var infiniteLoop2 = setInterval(function(){
                $('.rotating-item2').eq(currentItem2).fadeOut(fadeTime2);
 
                if(currentItem2 == numberOfItems2 -1){
                    currentItem2 = 0;
                }else{
                    currentItem2++;
                }
                $('.rotating-item2').eq(currentItem2).fadeIn(fadeTime2);
 
            }, itemInterval2);
        }
    };
 
    InfiniteRotator2.init();
 
});
})
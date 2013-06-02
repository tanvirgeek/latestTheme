// var fixColumnHeights = function() {
//   $('.columnizer-row').each(function(){
//     var maxHeight = 0;
//     $(this).find('.asset-inner').each(function(){
//       $(this).height('auto');
//       var innerHeight = $(this).innerHeight();
//       if (innerHeight > maxHeight) {
//         maxHeight = innerHeight;
//       }
//     });
//     $(this).find('.asset-inner').innerHeight(maxHeight);
//   });
// }
$(document).on('pop-initialized', function(){

    $('#four-column .asset-type-imagegroup.asset-size-4').hover(
        function(){
            $(this).find('img').css("border","1px solid #27CCC0");
            $(this).find('img').animate({
                
                width:'-=14',
                height:'-=14',
                padding: 7
                
                }, 300, function() {
             // Animation complete.
            });
        },
        function(){
            
            $(this).find('img').animate({
                width:'+=14',
                height:'+=14',
                padding: 0
                
                }, 300, function() {
                     $(this).css("border","0px solid #27CCC0");
            });;
        });
        
        $('#header-region .slide').css('width','100%');
        $('#header-region .slide img').css('width','100%');

});

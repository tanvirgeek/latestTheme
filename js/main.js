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
            $(this).find('.frame').css({border:'1px solid #06d5ba'});
        },
        function(){
            $(this).find('.frame').css({border:'1px solid transparent'});
        });

});

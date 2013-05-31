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
        
            var bs = $('#header-region .asset-type-imagegroup h2');

            for( var index = 0; index < bs.length; index++ ) {

                var text = bs.eq(index).text();
                    text = '<span class="coolSpan">' + text + '</span>';
                    //alert(text);
                    bs.eq(index).html(text);

        };
});

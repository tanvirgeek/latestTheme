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

    /*$('#four-column .asset-type-imagegroup.asset-size-4').hover(
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
        */
        $('#header-region .slide').css({
            width:'100%',
            height: '100%'
        });
        $('#header-region .slide img').css({
            width:'100%',
            height: '100%'
        });
    init();






});
function init(){
    
    var initialHeight=$('#pop-title').height();
    var fontSize=$('#pop-title').css('font-size');
    var lessFont=(parseInt(fontSize)-10).toString()+'px';
    var initialHeightString = initialHeight.toString();
    var lessHeight = initialHeight-20;
    var lessHeightString = lessHeight.toString();
    var titleParentHeight=$('#titleParent').outerHeight(true);
    
    $('#relative-bot').css({
        'top':titleParentHeight
    });
    
    $('#pop-title').attr({
        'data-0':"font-size:"+fontSize+"; top:0px;",
        'data-20':"font-size:"+lessFont+"; top:0px;"
    });
    
    $('#relative-bot').attr({
        'data-0':"top:"+titleParentHeight+"px;",
        'data-20':"top:"+lessHeightString+"px;"
    });
    
    $('#header-region .columnizer-col1 .populr-image-slider').attr({
        'data-20':"opacity:1",
        'data-700':"opacity:0"
    });
    
    $('.goUp').attr({
        'data-300':"bottom:-50px;",
        'data-400':"bottom:50px;"
    });
    
    var s = skrollr.init();
    
    $('.goUp').click(function(){
        
        
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
        
        
    });
}

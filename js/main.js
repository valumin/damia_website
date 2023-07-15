$(document).ready(() => {
    
    adjustToScreenSize()
    
})

$(window).on('resize', () => {
    adjustToScreenSize()
})


function adjustToScreenSize(){

    // Individual page height
    var clientHeight = $(window).height()
    $('.page').css('height', clientHeight)

    // center-title-widget vertical center align
    var widgetHeight = $('.centered-title-widget').height()
    var _topMargin = clientHeight / 2 - widgetHeight / 1.5
    $('.centered-title-widget').css('margin-top', _topMargin)

    // Level meter vertical center align
    var meterHeight = $('#level-meter').height()
    var _meterOffset = (clientHeight - meterHeight) / 2
    $('#level-meter').css('top', _meterOffset)
    
    // meterEvenSpace()
}

// function meterEvenSpace() {
//     var meterHeight = $('#level-meter').height()
//     var spacing = meterHeight / 10;
//     $(".meter-indicator").css('top', function() {
//         return $(this).index() * spacing
//       })

// }


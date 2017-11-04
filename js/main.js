window.onload = function(){
    function Timer (date) {
        var s = (new Date(date)).getTime() - (new Date()).getTime();
        s = parseInt(s / 1000);
        
        var h = parseInt(s / 3600);
        var d = parseInt(h / 24);
        h = h % 24;
        s -= h * 3600;
    
        var m = parseInt(s / 60) % 60;

        document.getElementById('days1').innerHTML = d.toString().length == 1 ? 0 : d.toString()[0];
        document.getElementById('days2').innerHTML = d.toString().length == 1 ? d.toString()[0] : d.toString()[1];

        document.getElementById('hours1').innerHTML = h.toString().length == 1 ? 0 : h.toString()[0];
        document.getElementById('hours2').innerHTML = h.toString().length == 1 ? h.toString()[0] : h.toString()[1];

        document.getElementById('mins1').innerHTML = m.toString().length == 1 ? 0 : m.toString()[0];
        document.getElementById('mins2').innerHTML = m.toString().length == 1 ? m.toString()[0] : m.toString()[1];
        //setInterval(alert(1), 1000);
    }
    if ($(".timer").size()) {
        Timer('November 30, 2017');
    }
    
    $(".slider").size() ? $(".slider").bxSlider({
        minSlides: 1,
        slideWidth: 297,
        maxSlides: 3,
        mode: 'horizontal',
        autoControls: false,
        auto: false,
        speed: 500,
        adaptiveHeight: true,
        infiniteLoop: false,
        onSlideAfter: function(index) {
            if ($(index).find('.bxslider').size()) {
                bxslider.reloadSlider();
            }
        },
        slideMargin: 32
    }) : $.noop();
    
   /* $('.points .point').click(function(){
        $('.points .point .popup').css({'display' : 'none'});
        $(this).find('.popup').css({'display' : 'block'});
    });
*/
}


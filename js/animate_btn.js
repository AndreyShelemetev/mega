var btn = document.querySelector('.gradient-button')
$(window).scroll(function (event) {
    var top = $(window).scrollTop();
    var show = window.innerWidth/3;
     if(top >= show){
        btn.style.opacity = '1'
     }
     else{
        btn.style.opacity = '0'
     }
});
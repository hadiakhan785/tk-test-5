let options = {
    onOpen: function () {

    }
}

// for navbar
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// for gallery carousel
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});

// for feature discovery
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems, options.onOpen);
    var instance = M.TapTarget.getInstance(elem);
    
});


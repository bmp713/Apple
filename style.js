
// Add event listners for arrow buttons
window.addEventListener('load', function(){
    document.querySelector('#arrow_down').addEventListener('click', nextPage);
    document.querySelector('#image').addEventListener('click', zoomImage);
});

var currentPage = 0;
var pages = ['#content_1','#content_2','#content_3','#content_4'];

function nextPage(){
    if( currentPage < pages.length - 1 ){
        document.querySelector('#arrow_down').src = 'assets/images/Icon_down.png';
        currentPage++;
    }
    else{
        document.querySelector('#arrow_down').src = 'assets/images/Icon_up.png';
        currentPage = 0;
    }
    rubberScroll( pages[currentPage] );
}
function rubberScroll( element ){
    var offset = 0.1; 
    var current = window.pageYOffset;
    var destination = document.querySelector( element ).offsetTop;

    var timer = setInterval( function(){
        offset = offset * 1.1;
        if( current <= destination ){
            current = current + offset;
            window.scrollTo( 0, current );
            if( current >= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
            }
        }
        if( current >= destination ){
            current = current - offset;
            window.scrollTo( 0, current );
            if( current <= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
            }
        }
    }, 1);
}

// Slideshow
var i = 0;
var images = [
    'assets/images/apple_7.jpg',
    'assets/images/apple_mouse.jpg',
    'assets/images/code2.jpeg',
    'assets/images/iphone-ipad-apple (2).jpg',
    'assets/images/apple_computer.jpg',
];
window.addEventListener("load", function(){
    for( image in images ){
        var node = document.createElement('IMG');
        node.src = images[image];

        document.querySelector('#gallery').appendChild( node );
        node.addEventListener("click", function(){
            changeImage( this.src );
        });
    }
});

function changeImage( elementID ){
    document.querySelector('#image').style.opacity = "0";

    setTimeout(function(){ 
        document.querySelector('#image').src = elementID;
    }, 1000);
    setTimeout(function(){ 
        document.querySelector('#image').style.opacity = "1";
    }, 1000);
}

function nextImage(){
    i++
    if( i > images.length - 2 ) i = 0;
    changeImage( images[i] );
}
function prevImage(){
    i--;
    if( i < 0 ) i = images.length - 1;
    changeImage( images[i] );
}

var zoom = false;
function zoomImage(){
    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        if( zoom == false ){
            zoom = true;
            document.querySelector('#image').style.height = '100%';
            document.querySelector('#image').style.boxShadow = '100px 100px 100px black';
        }
        else{
            zoom = false;
            document.querySelector('#image').style.height = '70%';
            document.querySelector('#image').style.boxShadow = '10px 10px 10px black';
        }
    }
    else{
        if( zoom == false ){
            zoom = true;
            document.querySelector('#image').style.width = '150%';
            document.querySelector('#image').style.boxShadow = '100px 100px 100px black';
        }
        else{
            zoom = false;
            document.querySelector('#image').style.width = '100%';
            document.querySelector('#image').style.boxShadow = '10px 10px 10px black';
        }
    }
}




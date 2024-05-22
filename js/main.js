




$('.slides').slick({
    swipe: false,
    centerMode: true,
    centerPadding: '16%',
    slidesToShow: 1,
    dots: true,
    focusOnSelect: true,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: `<button type="button" class="slick_btns slick-prev slider-prev"><i class="fa-solid fa-chevron-left"></i></button>;`,
    nextArrow: `<button type="button" class="slick_btns slick-next slider-next"><i class="fa-solid fa-chevron-right"></i></button>;`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                focusOnSelect: true,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: true,
            }
        }
    ]
});




function createYouTubePlayer(id, container) {
    var player;
    player = new YT.Player(container, {


        playerVars: {

            'fs': 0,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 0

        },
        videoId: id,

        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerReady(event) {
        event.target.playVideo();

    }



    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            document.querySelectorAll('.loader_base').forEach((es) => {
                es.classList.remove('loader_base_show')
            })
            done = true;

        }
    }

}

function handleImageClick(e) {
    var id = e.target.getAttribute('data-id');
    var parent = e.target.parentNode;
    var videoContainer = parent.nextElementSibling;
    document.querySelectorAll('.image_capa').forEach((es) => {
        es.classList.remove('hide_review_video')
    })

    var loader = parent.previousElementSibling;
    loader.classList.add('loader_base_show')

    document.querySelector('.slick-dots').classList.add('hide_review_video')



    parent.classList.add('hide_review_video')

    videoContainer.innerHTML = `<div id='player'></div>`;



    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = function () {
            createYouTubePlayer(id, `player`);
        };
    } else {
        createYouTubePlayer(id, `player`);
    }
}

var images = document.querySelectorAll('.image_capa img');
images.forEach((img) => {
    img.addEventListener('click', handleImageClick);
});



var slick_btns = document.querySelectorAll('.slick_btns')


slick_btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.video-container_{{ section.id }} #player').forEach((e) => {
            e.remove()
            document.querySelectorAll('.image_capa').forEach((es) => {
                es.classList.remove('hide_review_video')
            })
            document.querySelector('.slick-dots').classList.remove('hide_review_video')

        })

    })
})





var video = document.querySelector('.astra_section_1 video');

var tempoDesejado = 4.810703;

var intervalo = setInterval(function () {
    var frame = video.currentTime;
    if (frame > tempoDesejado) {
        video.pause();
        clearInterval(intervalo);
    }
}, 1000);



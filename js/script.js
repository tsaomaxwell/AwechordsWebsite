$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

/**
 * Google Analytics
 */

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'UA-125933587-1');

/**
 * Gallery
 */

blueimp.Gallery(
    [
        {
            title: 'VCN 2023: Jigsaw',
            href: 'https://youtu.be/Y3LWWTATdTo?t=4477',
            type: 'text/html',
            youtube: 'Y3LWWTATdTo',
            poster: 'https://img.youtube.com/vi/Y3LWWTATdTo/maxresdefault.jpg'
        },
        "img/group_pics/g23-24.jpg",
        {
            title: 'VCN 2020: Streetcar',
            href: 'https://www.youtube.com/watch?v=tP4wCNIqD6A',
            type: 'text/html',
            youtube: 'tP4wCNIqD6A',
            poster: 'https://img.youtube.com/vi/tP4wCNIqD6A/maxresdefault.jpg'
        },
        "img/group_pics/g22-23.jpg",
        {
            title: 'VCN 2020: Streetcar',
            href: 'https://www.youtube.com/watch?v=tP4wCNIqD6A',
            type: 'text/html',
            youtube: 'tP4wCNIqD6A',
            poster: 'https://img.youtube.com/vi/tP4wCNIqD6A/maxresdefault.jpg'
        },
        {
            title: 'Spring Showcase 2018: Haven\'t Met You Yet (Encore)',
            href: 'https://www.youtube.com/watch?v=6zPxJDZ3l_E',
            type: 'text/html',
            youtube: '6zPxJDZ3l_E',
            poster: 'https://img.youtube.com/vi/6zPxJDZ3l_E/maxresdefault.jpg'
        },
        "img/group_pics/g5.jpg",
        {
            title: 'Spring Showcase 2018: Fix You',
            href: 'https://www.youtube.com/watch?v=mqeZPqhXiX8',
            type: 'text/html',
            youtube: 'mqeZPqhXiX8',
            poster: 'https://img.youtube.com/vi/mqeZPqhXiX8/maxresdefault.jpg'
        },
        "img/group_pics/g6.jpg",
        {
            title: 'VCN 2018: Haven\'t Met You Yet',
            href: 'https://www.youtube.com/watch?v=nTCaMGTHD0I',
            type: 'text/html',
            youtube: 'nTCaMGTHD0I',
            poster: 'https://img.youtube.com/vi/nTCaMGTHD0I/maxresdefault.jpg'
        },
        "img/group_pics/g7.jpg",
        {
            title: 'VCN 2018: Unsteady',
            href: 'https://www.youtube.com/watch?v=kpkHumFbk_o',
            type: 'text/html',
            youtube: 'kpkHumFbk_o',
            poster: 'https://img.youtube.com/vi/kpkHumFbk_o/maxresdefault.jpg'
        },
        "img/group_pics/g8.jpg",
        {
            title: 'VCN 2018: Blackbird/I Will/Yesterday Mash-UP',
            href: 'https://www.youtube.com/watch?v=Ogju8H7okHw',
            type: 'text/html',
            youtube: 'Ogju8H7okHw',
            poster: 'https://img.youtube.com/vi/Ogju8H7okHw/maxresdefault.jpg'
        },
        {
            title: 'VCN 2017: If I Were A Boy',
            href: 'https://www.youtube.com/watch?v=gqJV592fr6E',
            type: 'text/html',
            youtube: 'gqJV592fr6E',
            poster: 'https://img.youtube.com/vi/gqJV592fr6E/maxresdefault.jpg'
        },
        {
            title: 'VCN 2016: Hello',
            href: 'https://www.youtube.com/watch?v=EUo-0jKmvOM',
            type: 'text/html',
            youtube: 'EUo-0jKmvOM',
            poster: 'https://img.youtube.com/vi/EUo-0jKmvOM/maxresdefault.jpg'
        },
        {
            title: 'Ariana Grande Medley',
            href: 'https://www.youtube.com/watch?v=JpeZV8XJhR4',
            type: 'text/html',
            youtube: 'JpeZV8XJhR4',
            poster: 'https://img.youtube.com/vi/JpeZV8XJhR4/maxresdefault.jpg'
        }
    ],
    {
        container: '#blueimp-gallery-carousel',
        carousel: true,
        youTubeClickToPlay: false,
        displayTransition: false
    }
);

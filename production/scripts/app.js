$(document).ready(function() {
    var carousel = new Siema({
        selector: "#siema-carousel",
        duration: 500,
        easing: "ease-out",
        perPage: 1,
        startIndex: 0,
        threshold: 100,
        draggable: true,
        loop: true,
        onChange: () => {
            for(var i = 0; i < 3; i++) {
                $(`.selector > input[value="${i}"]`).prop("checked", false);
            }

            $(`.selector > input[value="${carousel.currentSlide}"]`).prop("checked", true);
        }
    });

    $(".arrow").click(function(e) {
        if(e.target.id === "left-arrow")
            carousel.prev();
        else if(e.target.id === "right-arrow")
            carousel.next();
    });

    $(".selector > input").click(function(e) {
        carousel.goTo(e.target.value);
    });

    $(".nav-link").click(function(e) {
        var offsetAmount = 50;
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - offsetAmount
        }, 500);

        return false;
    });

    // Code for testing
    // Will Get Removed at data implementation
    // #region Test_Code
    for(var i = 0; i < 50; i++) {
        var rand = Math.floor(Math.random() * 3) + 2;
        var rand2 = Math.floor(Math.random() * 3) + 2;
        var rand3 = Math.floor(Math.random() * 9) + 1;
        var rand4 = Math.floor(Math.random() * 9) + 1;

        var size1 = rand.toString() + rand3.toString() + "0";
        var size2 = rand2.toString() + rand4.toString() + "0";

        $("#gallery > div").append($('<img src="https://picsum.photos/'+size1+'/'+size2+'/?random"/>'));
    }

    
    $("#gallery > div > img").each(function() {
            var rand = (Math.floor(Math.random() * 3) + 1) * 100;
            var self = this;
            $(this).on('load', function() {
                setTimeout(function() {
                    $(self).animate({opacity: 1}, 1000 + rand);
                    $(self).addClass('hover-effect');
                }, 5000);
            });
    });
        
    // #endregion Test_Code

    setTimeout(function() {
        $("#gallery > div > img").click(function(e) {
            // Get image properties e.g.(source url)
            // Load into modal & display it

            console.log("some");
            
            showModal(true, "url goes here");
        });

        $("#modal").click(function(e) {
            if(e.target !== this) {
                return;
            }

            showModal(false);
        });

        $("#close").click(function() {
            showModal(false);
        });
    }, 2000);
});

var showModal = function(show, url) {
    if(show === true) {
        // Hide & disable scrollbar
        //$("html, body").css("overflow", "hidden"); // Glitches jquery smooth scroll if on but allows scrolling if off

        // Pass in url here
        $("#modal").fadeIn("medium");
    }
    else if(show === false) {
        // Show & enable scrollbar
        //$("html, body").css("overflow", "initial");

        $("#modal").fadeOut("medium");
    }
}

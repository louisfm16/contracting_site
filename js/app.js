$(document).ready(function() {
    var carousel = new Siema({
        selector: "#siema-carousel",
        duration: 500,
        easing: "ease-out",
        perPage: 1,
        startIndex: 0,
        threshold: 100,
        draggable: true,
        loop: true
    });

    $("#left-arrow").click(function() {
        carousel.prev();
    });

    $("#right-arrow").click(function() {
        carousel.next();
    });

    $("#carousel-selectors > input").click(function(e) {
        carousel.goTo(e.target.value);
    });

    // Code for testing
    // Will Get Removed at data implementation
    // #region Test_Code
    for(i = 0; i < 5; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 3) + 2;
            var rand2 = Math.floor(Math.random() * 3) + 2;

            $(".c1").append("<img src=\"https://picsum.photos/"+ rand + "00\"/>");
        }, 1);
    }

    for(i = 0; i < 5; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 3) + 2;
            var rand2 = Math.floor(Math.random() * 3) + 2;

            $(".c2").append("<img src=\"https://picsum.photos/"+ rand + "00\"/>");
        }, 1);
    }

    for(i = 0; i < 5; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 3) + 2;
            var rand2 = Math.floor(Math.random() * 3) + 2;

            $(".c3").append("<img src=\"https://picsum.photos/"+ rand + "00\"/>");
        }, 1);
    }

    for(i = 0; i < 5; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 3) + 2;
            var rand2 = Math.floor(Math.random() * 3) + 2;

            $(".c4").append("<img src=\"https://picsum.photos/"+ rand + "00\"/>");
        }, 1);
    }
    // #endregion Test_Code

    setTimeout(function() {
        $(".column > img").click(function(e) {
            // Get image properties e.g.(source url)
            // Load into modal & display it

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
    }, 100);
});

var showModal = function(show, url) {
    if(show === true) {
        // Hide & disable scrollbar
        $("html, body").css("overflow", "hidden");

        // Pass in url here
        $("#modal").fadeIn("medium");
    }
    else if(show === false) {
        // Show & enable scrollbar
        $("html, body").css("overflow", "auto");

        $("#modal").fadeOut("medium");
    }
}

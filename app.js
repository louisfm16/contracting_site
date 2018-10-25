$(document).ready(function() {
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

            showModal(true);
        });

        $("#close").click(function() {
            showModal(false);
        });
    }, 100);
});

var showModal = function(show, url) {
    console.log(show);
    if(show === true) {
        // Pass in url here
        $("#modal").css("display", "block");
    }
    else if(show === false) {
        $("#modal").css("display", "none");
    }
}

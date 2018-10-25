$(document).ready(function() {
    for(i = 0; i < 5; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 3) + 2;
            var rand2 = Math.floor(Math.random() * 3) + 2;

            $(".c1").append("<img src=\"https://picsum.photos/"+ rand + "00\"/>");
        }, 500);
    }

    for(i = 0; i < 5; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 3) + 2;
            var rand2 = Math.floor(Math.random() * 3) + 2;

            $(".c2").append("<img src=\"https://picsum.photos/"+ rand + "00\"/>");
        }, 500);
    }
    for(i = 0; i < 5; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 3) + 2;
            var rand2 = Math.floor(Math.random() * 3) + 2;

            $(".c3").append("<img src=\"https://picsum.photos/"+ rand + "00\"/>");
        }, 500);
    }

    for(i = 0; i < 5; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 3) + 2;
            var rand2 = Math.floor(Math.random() * 3) + 2;

            $(".c4").append("<img src=\"https://picsum.photos/"+ rand + "00\"/>");
        }, 500);
    }
});

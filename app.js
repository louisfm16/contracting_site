$(document).ready(function() {
    for(i = 0; i < 10; i++) {
        setTimeout(function() {
            var rand = Math.floor(Math.random() * 5) + 2;
            var rand2 = Math.floor(Math.random() * 5) + 2;

            $("#gallery").append("<img src=\"https://picsum.photos/"+ rand + "00/" + rand2 + "00/?random\"/>");
        }, 500);
    }
});

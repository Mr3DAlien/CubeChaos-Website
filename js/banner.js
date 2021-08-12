$(document).ready(function () {
    var current_banner_index = 0;
    var banners = document.getElementsByClassName("banner_slide");

    $(".banner_right_button").click(function () {
         current_banner_index = current_banner_index + 1;
         current_banner_index = current_banner_index % banners.length;

         for (var i = 0; i < banners.length; i++) {
             banners[i].style.display = "none";
         }
         banners[current_banner_index].style.display = "flex";
         set_appropriate_background();
    });
    
    $(".banner_left_button").click(function () {
        current_banner_index = current_banner_index - 1;
        if (current_banner_index < 0) { current_banner_index = banners.length - 1; }

        for (var i = 0; i < banners.length; i++) {
            banners[i].style.display = "none";
        }
        banners[current_banner_index].style.display = "flex";
        set_appropriate_background();
   });

   function set_appropriate_background() {
       var image_url = "./resources/banner/backgrounds/banner_background_" + current_banner_index + ".png";
        $(".banner_container").css("background-image", "url(" + image_url + ")");
   }
});
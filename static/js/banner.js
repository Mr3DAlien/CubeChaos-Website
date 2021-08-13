$(document).ready(function () {
    var current_banner_index = 0;
    var banners = document.getElementsByClassName("banner_slide");

    var left_animation = anime({
        targets: '.banner_slide',
        translateX: [-1000, 0],
        duration: 700,
        easing: 'easeOutElastic(0.5, 1.4)',
      });

    var right_animation = anime({
        targets: '.banner_slide',
        translateX: [1000, 0],
        duration: 700,
        easing: 'easeOutElastic(0.5, 1.4)',
      });

    $(".banner_right_button").click(function () {
        var button = $(this);
        button.prop("disabled", true);
        setTimeout(function(){
            button.prop('disabled', false);
        }, 1000);
        right_pressed();
    });
    
    $(".banner_left_button").click(function () {
        var button = $(this);
        button.prop("disabled", true);
        setTimeout(function(){
            button.prop('disabled', false);
        }, 1000);
        left_pressed();
   });

   function right_pressed() {
    current_banner_index = current_banner_index + 1;
    current_banner_index = current_banner_index % banners.length;

    for (var i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }
    banners[current_banner_index].style.display = "flex";
    set_appropriate_background();
    animate_right();
   }

   function left_pressed() {
    current_banner_index = current_banner_index - 1;
    if (current_banner_index < 0) { current_banner_index = banners.length - 1; }

    for (var i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }
    banners[current_banner_index].style.display = "flex";
    set_appropriate_background();
    animate_left();
   }

   function set_appropriate_background() {
       var image_url = "/static/resources/banner/backgrounds/banner_background_" + current_banner_index + ".png";
        $(".banner_container_background_holder_0").css("background-image", "url(" + image_url + ")");
        $(".banner_container_background_holder_1").fadeOut(1000, function() {
            $(".banner_container_background_holder_1").css("background-image", "url(" + image_url + ")");
            $(".banner_container_background_holder_1").fadeIn(0);
        });
        
   }

   function animate_left() {
        left_animation.restart();
   }

   function animate_right() {
        right_animation.restart();
 }
});
$("document").ready(function() {
    const different_states = 2;
    let banner_state = 0;

    $("#banner_arrow_right_container img").click(function() {
        banner_state = increment_banner_state(banner_state);
        update_banner();
    });

    $("#banner_arrow_left_container img").click(function() {
        banner_state = decrement_banner_state(banner_state);
        update_banner();
    });

    function increment_banner_state(banner_state) {
        banner_state = banner_state + 1;
        return banner_state % different_states;
    }

    function decrement_banner_state(banner_state) {
        if (banner_state == 0) {
            banner_state = different_states;
        }
        return banner_state - 1;
    }

    function hide_all() {
        for (let i = 0; i < (different_states + 1); i++) {
            let id = "#banner_img_" + i;
            if (banner_state != i) {
                $(id).fadeOut(800);
            }
        }
    }

    function show(banner_state) {
        $("#banner_img_" + banner_state).fadeIn(800);
    }

    function update_banner() {
        hide_all();
        show(banner_state);
    }
});
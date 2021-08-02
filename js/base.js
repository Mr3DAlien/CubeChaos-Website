
$(document).ready(function() {
    $("#java_edition_selection_image").hover(function() {
        $(this).attr("src", "resources/buttons/big_buttons/java_edition_selected.png");
        
    }, function() {
        $(this).attr("src", "resources/buttons/big_buttons/java_edition.png");
    });

    $("#bedrock_edition_selection_image").hover(function() {
        $(this).attr("src", "resources/buttons/big_buttons/bedrock_edition_selected.png");
        
    }, function() {
        $(this).attr("src", "resources/buttons/big_buttons/bedrock_edition.png");
    });

    $("#cubechaos_addons_selection_image").hover(function() {
        $(this).attr("src", "resources/buttons/big_buttons/addons_selected.png");
        
    }, function() {
        $(this).attr("src", "resources/buttons/big_buttons/addons.png");
    });

    $("#more_selection_image").hover(function() {
        $(this).attr("src", "resources/buttons/big_buttons/more_selected.png");
        
    }, function() {
        $(this).attr("src", "resources/buttons/big_buttons/more.png");
    });

    $("#more_versions_button").click(() => {
        let more_versions_button = $("#more_versions_button");
        if (more_versions_button.hasClass("active")) {
            more_versions_button.removeClass("active");
            $(".additional_version").hide();
            //more_versions_button.show();
        } else {
            more_versions_button.addClass("active");
            //more_versions_button.hide();
            $(".additional_version").show();
        }
    });
});